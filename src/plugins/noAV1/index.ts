/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoAV1",
    description: "Disables AV1 encoding.",
    authors: [Devs.maestro],
    patches: [
        {
            find: "Available codecs",
            replacement: {
                match: /rtxPayloadType:(\i)\+1,encode:(\i)\.encode,decode:(\i)\.decode}/g,
                replace: "rtxPayloadType:$1+1,encode: $2.name === \"AV1\" ? false : $2.encode,decode:$3.decode}"
            }
        }
    ]
});
