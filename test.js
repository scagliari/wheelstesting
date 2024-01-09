%%[

    var @payload, @response
    set @payload = "{
        "grant_type":"client_credentials",
        "client_id":"lpfb4r0m3bbq77bifyoddjvz",
        "client_secret":"cQ16dvRVC5HrXAIiAurxkLbD",
        "account_id":"534006605"
    }"

   
    
    set @request = "test"
    
    ]%%

    Status Code: %%=v(@request)=%%
    <br><br>response: %%=v(@response)=%%