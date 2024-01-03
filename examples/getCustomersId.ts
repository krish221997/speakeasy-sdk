import { Client, customersProvider,  } from '../src/sdk/sdk';



async function main({connectionKey}) {

    const client = new Client({
        secret: "sk_live_1_GBXmayPIMgiO6w1kENeE-7tcF9SsiUfrn9a8XaBf8wWFB0WaUD-kopJ211AzXnMz6Wkl8dCfPa0U0FM8quMjDVsNehLdolrIlmxEj6qoRhpNMZrdSpAnfck-csTcgnAiMh4CVbikrVRYL01nRojhmfSAWIeM15lVkSI_vc32oSIiFj78R8Ys6pu2xgAp9eRzSpf5",
        connectionKey,
        serverURL: "https://development-api.integrationos.com/v1/unified"
    });
   
    const { object, statusCode } = await customersProvider(client).getCustomersId({
        id: "cus_OT3CLnirqcpjvw"
    })

    const customer = object?.unified;

    if (statusCode !== 200) {
        throw new Error("Unexpected status code:" + statusCode || '-');
    }

}

main({connectionKey: "test::stripe-01::sandbox-connection-bc60b94729"});