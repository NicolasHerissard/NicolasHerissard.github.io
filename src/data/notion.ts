import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({auth: 'ntn_b72674673576AD7oMbdnWs05Sro0XrnpglhL7r6s2Z64BT'});

export async function getAvailabilityStatus() {
    const notionList = await notion.databases.query({database_id: '1d61b12cc05d80a49ffee22f582bb575'})
    const pages = notionList.results[0] as any;
    const availability = pages.properties.Etat.status.name as string
    return availability;
  }