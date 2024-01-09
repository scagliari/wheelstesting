%%[

    VAR @payload, @response
    SET @payload = '{
        "requestBody": {
          "incidentNumber": 202305957336,
          "serviceCode": "MG",
          "serviceSequence": 1,
          "requestor": "CloudPage",
          "requestType": "AddEvent",
          "eventType": "TESTHIST",
          "note": "this is a test from SFMC"
        }
      }'

    SET @headerName = "APP_NAME"
    SET @headerValue = "INTERNAL_APP"
    
    SET @request = HTTPPost("http://LPUSXAD01:9087/mims/do/ServiceOrder/api/addNotesAndEvents",
    "application/json", @payload, @response, @headername, @headervalue)
    
    ]%%

    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%