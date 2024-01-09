%%[

    var @payload, @response
    
    set @payload = '{
        "requestBody": {
            "incidentNumber": 202305964209,
            "serviceCode": "MG",
            "serviceSequence": 1,
            "requestor": "MktgCloud",
            "requestType": "ADDNOTE",
            "eventType": null,
            "note": "email test@something bounced test."
        }
    }'

    set @headername = "APP_NAME"
    set @headervalue = "INTERNAL_APP"
    
    set @request = HTTPPost("http://LPUSXAD01:9087/mims/do/ServiceOrder/api/addNotesAndEvents","application/json", @payload, @response, @headername, @headervalue)
    
    ]%%
    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%