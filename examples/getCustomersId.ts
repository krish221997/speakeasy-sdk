import { IntegrationOS } from "./../src/sdk/sdk";

const connectionKey = "test::stripe-01::sandbox-connection-bc60b94729";

async function getCustomers() {
  const integrate = new IntegrationOS(
    "sk_test_1_CzO2Cj8DwGFdbbJyFpzMuePd8sJ2FK5dIAlEGVOk0pnJ-ZtUX42aGw5bICZD6fGZtynUDkMogDIw6aLGil59CGp_7jxo-qUk3xYwbJQKnGkHvwemQDyPwHvwLdd_mFdZFysmlgZTjAP4jW07n9V4h-gp2yAx7nBhkSbfhct3SRXh3ed3zfD4q0bLP-Irmdqa8w-t",
    {
      serverURL: "https://development-api.integrationos.com/v1/unified",
    }
  );

  const response = await integrate.customers.get(connectionKey, {
    id: "cus_OT3CLnirqcpjvw",
  });

  console.log(response);
}

getCustomers();
