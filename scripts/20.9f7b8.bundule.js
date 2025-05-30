"use strict";
(self["webpackChunktokenised_invoice_interface"] = self["webpackChunktokenised_invoice_interface"] || []).push([[20],{

/***/ 60020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  offchainLookup: () => (/* binding */ offchainLookup),
  offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
});

// UNUSED EXPORTS: ccipRequest, offchainLookupAbiItem

// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/call.js + 1 modules
var call = __webpack_require__(92071);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(87802);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(5799);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/utils.js
var utils = __webpack_require__(37608);
;// ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/ccip.js



class OffchainLookupError extends base/* BaseError */.C {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,utils/* getUrl */.I)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
            name: 'OffchainLookupError',
        });
    }
}
class OffchainLookupResponseMalformedError extends base/* BaseError */.C {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,utils/* getUrl */.I)(url)}`,
                `Response: ${(0,stringify/* stringify */.A)(result)}`,
            ],
            name: 'OffchainLookupResponseMalformedError',
        });
    }
}
class OffchainLookupSenderMismatchError extends base/* BaseError */.C {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
            name: 'OffchainLookupSenderMismatchError',
        });
    }
}
//# sourceMappingURL=ccip.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/request.js
var request = __webpack_require__(8232);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/abi/decodeErrorResult.js
var decodeErrorResult = __webpack_require__(57583);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(22298);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddressEqual.js
var isAddressEqual = __webpack_require__(94034);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(5502);
// EXTERNAL MODULE: ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(4629);
;// ./node_modules/.pnpm/viem@2.23.13_bufferutil@4.0.9_typescript@4.9.5_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/ccip.js









const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, to, }) {
    const { args } = (0,decodeErrorResult/* decodeErrorResult */.W)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function'
        ? ccipRead.request
        : ccipRequest;
    try {
        if (!(0,isAddressEqual/* isAddressEqual */.h)(to, sender))
            throw new OffchainLookupSenderMismatchError({ sender, to });
        const result = await ccipRequest_({ data: callData, sender, urls });
        const { data: data_ } = await (0,call/* call */.T)(client, {
            blockNumber,
            blockTag,
            data: (0,concat/* concat */.xW)([
                callbackSelector,
                (0,encodeAbiParameters/* encodeAbiParameters */.h)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            to,
        });
        return data_;
    }
    catch (err) {
        throw new OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipRequest({ data, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        const headers = method === 'POST' ? { 'Content-Type': 'application/json' } : {};
        try {
            const response = await fetch(url.replace('{sender}', sender.toLowerCase()).replace('{data}', data), {
                body: JSON.stringify(body),
                headers,
                method,
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new request/* HttpRequestError */.Ci({
                    body,
                    details: result?.error
                        ? (0,stringify/* stringify */.A)(result.error)
                        : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,isHex/* isHex */.q)(result)) {
                error = new OffchainLookupResponseMalformedError({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            error = new request/* HttpRequestError */.Ci({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}
//# sourceMappingURL=ccip.js.map

/***/ })

}]);