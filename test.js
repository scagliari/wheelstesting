%%[

    var @payload, @response
    set @payload = "{
        "grant_type":"client_credentials",
        "client_id":"lpfb4r0m3bbq77bifyoddjvz",
        "client_secret":"cQ16dvRVC5HrXAIiAurxkLbD",
        "account_id":"534006605"
    }"

   
    
    set @request = HTTPPost("https://mcnm900xrbbvc4kmk9sq7zst3jjm.auth.marketingcloudapis.com/v2/token",
    "application/json", @payload, @response)
    
    ]%%

    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%