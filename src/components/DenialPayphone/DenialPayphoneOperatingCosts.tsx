export default function DenialPayphoneOperatingCosts() {
    return (
        <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center max-w-4xl px-6">
                <h1 className="text-5xl font-bold text-gray-900 mb-8"
                    style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
                    Operating Costs
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <table className="w-full border-collapse border border-gray-300 text-gray-900">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-3 text-left font-bold">Item</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-bold">Cost (estimated)</th>
                                <th className="border border-gray-300 px-4 py-3 text-center font-bold">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Payphone + stand</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$150</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Raspberry Pi</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$110</td>
                                <td className="border border-gray-300 px-4 py-3 text-center">
                                    <a href="https://www.amazon.com/dp/B0B3M2HKN6/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0B3M2HKN6&pd_rd_w=5Lp8J&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=S5TTV39REP5E1G9ZX1Y0&pd_rd_wg=UyAkz&pd_rd_r=8d8eb194-c882-422e-bdb4-02c5c6329d80&s=pc&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM">
                                        <span className="text-blue-500">Link</span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Label maker</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$15</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Security pen (increase profit by reducing theft)</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$10</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Clipboard with custom stationary</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$10</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">20W solar panel with DC power</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$100</td>
                                <td className="border border-gray-300 px-4 py-3 text-center">
                                    <a href="https://www.amazon.com/Portable-ZeroKor-Efficiency-Waterproof-Backpacking/dp/B0DD7CPPHD/ref=sr_1_3?crid=1SLFE9IOJF67J&dib=eyJ2IjoiMSJ9.OGyfXxSjwZcyPO9Wrz-QwVhK--vrrikZJ2KC9fCXrnfbSjP4nFnK5jCIDiM4vPPIYdi4bmY7WU73ojuYmbmA0avM1zE5LJiT5vQdcKV_QiLPWwwTZ4QKMfDe0FdzpGvcLCVkavMFcUSyoWdcw-7DVED3ucz9Vit5-jUnOxY4dVd5FvgfKv3eTCNOIrK-OdUynsSSTzF1rKNCUBxBhpcpaCjl7OdEzHGlunlO1A9MD5A.QfQxlyYOcCrkDbKOfQBmRdTkJLH12YvWJg42KjlJJcQ&dib_tag=se&keywords=solar%2Bpanel%2Bdc%2Bpower&qid=1748816486&sprefix=solar%2Bpanel%2Bpower%2Caps%2C248&sr=8-3&th=1" >
                                        <span className="text-blue-500">Link</span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">USB Phone Handset</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$50</td>
                                <td className="border border-gray-300 px-4 py-3 text-center">
                                    <a href="https://www.amazon.com/Digitus-DA-70772-USB-Telephone-Handset/dp/B000FIH4FQ/ref=sr_1_1_sspa?crid=27DO9IK73BCT3&dib=eyJ2IjoiMSJ9.3_zMpv0blseJynBOz0-DOsjnxeZ6BMzE7KQGj7hzTUPeB9xXQ902Dm1z8SqGB6VBuMd6L6s6wlEUp7G9w4fVg0mkwVkcFduOr51TqPrWdV2lTcdk1CjCEZiFlVU2lM5Y1uiGv2yFjuNjZ9wU_AJz3q_fv86MLr7gQdFa-kWJIe6RoCiuHCCOwDPSH0d1qzhJHSp62mbNK1KJCKscCYHETWIa4gkzK9FVYbqnXAxMjpiFZkmtnU5YV7CXqstk4PLb9Z2YW4p3pmr30DJwzmq0dh7idYxdxtLIFB4X0Y3daqk.MYfbjR9iTcIjxhi5XrmxEBnZskyTfmg6EXor7MUPNoY&dib_tag=se&keywords=phone+handset+usb&qid=1748816250&sprefix=phone+handset+usb%2Caps%2C161&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">
                                        <span className="text-blue-500">Link</span>
                                    </a>
                                </td>
                            </tr>
                            <tr className="line-through text-gray-400">
                                <td className="border border-gray-300 px-4 py-3 text-left">Round trip flight (BOS &harr; LAX)</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$500</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Shipping the phone to Boston and back to LA</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$300</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-3 text-left">Billboard</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$3000</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                            <tr className="bg-gray-800 text-white font-bold">
                                <td className="border border-gray-300 px-4 py-3 text-left">Total cost</td>
                                <td className="border border-gray-300 px-4 py-3 text-right">$3,745</td>
                                <td className="border border-gray-300 px-4 py-3 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </section>
    );
} 