/**
 * Google Apps Script for handling form submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets and create a new sheet or use an existing one
 * 2. In the first row, add headers: Name | Phone | Email | City | Qualification | Program | Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Save the project
 * 6. Click Deploy > New deployment
 * 7. Select type: Web app
 * 8. Set Execute as: Me
 * 9. Set Who has access: Anyone
 * 10. Click Deploy
 * 11. Copy the Web app URL and replace it in your Hero.jsx file
 * 
 * OPTIONAL: To use a specific spreadsheet ID instead of active one, replace 
 * SpreadsheetApp.getActiveSpreadsheet() with:
 * SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE')
 */

function doPost(e) {
  try {
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get all existing data to check for duplicates
    const lastRow = sheet.getLastRow();
    
    // If sheet has headers but no data, lastRow will be 1
    // We need to check if phone exists in column B (Phone column)
    let phoneExists = false;
    
    if (lastRow > 1) {
      // Get all phone numbers from column B (skip header row)
      const phoneRange = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
      
      // Check if the submitted phone number already exists
      phoneExists = phoneRange.some(row => row[0] === data.phone);
    }
    
    // If phone number already exists, return error
    if (phoneExists) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Mobile number already exists"
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // If phone doesn't exist, add the new row
    const timestamp = new Date();
    
    // Prepare the row data in the correct order: Name, Phone, Email, City, Qualification, Program, Timestamp
    const rowData = [
      data.name || "",
      data.phone || "",
      data.email || "",
      data.city || "",
      data.qualification || "",
      data.program || "",
      timestamp
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Data saved successfully"
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error processing request: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Function to set up headers if sheet is empty
 * Run this once manually from the Apps Script editor if needed
 */
function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Check if first row is empty
  if (sheet.getLastRow() === 0) {
    const headers = ["Name", "Phone", "Email", "City", "Qualification", "Program", "Timestamp"];
    sheet.appendRow(headers);
    
    // Format header row (optional)
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#4285f4");
    headerRange.setFontColor("#ffffff");
  }
}

