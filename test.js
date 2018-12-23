const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('test');

const api_key = config.API_KEY2;
const client_id = config.CLIENT_ID2;

function makeApiCall() {
      var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: '1-DcqMiS4qUf__GBB2VJKaSvcw7neX6hiHoMvtVbn19c',  // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
        range: 'A1',  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
      };

      var valueRangeBody = {
        // TODO: Add desired properties to the request body.
        values:[
          [myParam]
        ]
      };

      var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = api_key;  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = client_id;  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/spreadsheets'
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

      window.gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function handleClientLoad() {
      window.gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }

    function handleSignInClick(event) {
      window.gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
      window.gapi.auth2.getAuthInstance().signOut();
    }

    document.body.onload = handleSignInClick();
