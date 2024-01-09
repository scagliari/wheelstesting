%%[

    var @payload, @response
    set @payload = '{
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

    set @headername = "APP_NAME"
    set @headervalue = "INTERNAL_APP"
    
    set @request = HTTPPost("http://LPUSXAD01:9087/mims/do/ServiceOrder/api/addNotesAndEvents%22",
    "application/json", @payload, @response, @headername, @headervalue)
    
    ]%%

    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%