%%[

    var @payload, @response
    set @payload = "{
        "requestBody": {
            "incidentNumber": 202305964209,
            "serviceCode": "MG",
            "serviceSequence": 1,
            "requestor": "MktgCloud",
            "requestType": "ADDNOTE",
            "eventType": null,
            "note": "email test@something bounced test."
        }
    }"

    set @headername = "APP_NAME"
    set @headervalue = "INTERNAL_APP"
    
    set @request = HTTPPost("http://LPUSXAD02:9083/mims/do/ServiceOrder/api/addNotesAndEvents",
    "application/json", @payload, @response)
    
    ]%%

    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%