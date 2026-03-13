import { APIRequestContext } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any


 export async function generateToken(request:APIRequestContext){

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                   "grant_type": "password",
                    "client_id": "3MVG97L7PWbPq6UzoHqDvjAE7oTuA0RYADhseZhyRv0iFci.mB88CHSGAAfZUx4O9kPZ79kEn2kP92tT_2BA0",
                    "client_secret": "6512CADE0A605410D0DE4BAE356F38F134FF3A445FAE8375176E9AACD13D23FE",
                    "username": "sanjaykumar2k14.sk.f35ed64f9b5d@agentforce.com",
                    "password": "Tn32af0639In1I0nfJLb4N2BFWCOCoxm7Xl"

            }

        })
    const responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status()); // 200 
    console.log(response.statusText());// OK

    token = responseBody.access_token;
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type
}

/* ******************************************************************** */

export async function getdashboard(request:APIRequestContext,name : string){

    await generateToken(request)

    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Dashboard`,
        {
            headers: {
                
                "Authorization": `${tokenType} ${token}` 
            },
            
        })

        const responseBody= await response.json();
        const boardresponse = responseBody.recentItems
        for (let data of boardresponse)
        {
            if (data.Title === name)
            {
              console.log(data.Id)
                return data.Id
            }
        
        }

       console.log(responseBody);

        console.log(response.status());
        console.log(response.statusText());

    
}

export async function deleteDashboard(request:APIRequestContext,id : string){

 const response = await request.delete(`${inst_url}/services/data/v65.0/sobjects/Dashboard/${id}`,
        {
            headers:{
                "Authorization": `${tokenType} ${token}`
            }
        })

    

    console.log(response.status());
    console.log(response.statusText());

   
    
}
 