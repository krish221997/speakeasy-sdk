<!-- Start SDK Example Usage [usage] -->
```typescript
import { Client } from "integrationos/node";

async function run() {
    const sdk = new Client();

    const id = "string";
    const xIntegrationosSecret = "string";
    const xIntegrationosConnectionKey = "string";

    const res = await sdk.customers.getCustomersId(
        id,
        xIntegrationosSecret,
        xIntegrationosConnectionKey
    );

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->