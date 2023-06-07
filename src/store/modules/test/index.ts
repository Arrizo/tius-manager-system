import { defineStore } from 'pinia'
import { Crypto, rsaEncrypt, rsaDecrypt } from '@/utils/helper'
const useTestStore = defineStore('test', {
  state: () => ({
    publicKey: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAooKNq+/UQa5+7Ma+/Gl2
rpqhT9zB6AjoUxnU8BzyC2UkjHrI3NBFH4O0KIVIUVGaaT5d2xJKjguFL33qAR7O
9+k+r23EI6Uw0wYUf3GwD9x3H8jdFbtb8Qc3XcM9xUZse50jl56rcnMBc9EADls5
aBwnYVsfPl4lG0uk3bhcs5wslS6ubP99lxwBtwy9NWR5sa+nuzl6athhl68PDdYi
AEFpZgW0f4UVQqKGDq/MyXlaf7ArTslkSE0oGQHDLUx35GLcVEDsrCTmA9NUAjsl
HBa7e+e0XwC1hsh24ddd63Q327zHB2BKqa7L9JmFZTgWNHvuoi8c1FFlijEMQxBG
/QIDAQAB`,
    privateKey: `MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCigo2r79RBrn7s
xr78aXaumqFP3MHoCOhTGdTwHPILZSSMesjc0EUfg7QohUhRUZppPl3bEkqOC4Uv
feoBHs736T6vbcQjpTDTBhR/cbAP3HcfyN0Vu1vxBzddwz3FRmx7nSOXnqtycwFz
0QAOWzloHCdhWx8+XiUbS6TduFyznCyVLq5s/32XHAG3DL01ZHmxr6e7OXpq2GGX
rw8N1iIAQWlmBbR/hRVCooYOr8zJeVp/sCtOyWRITSgZAcMtTHfkYtxUQOysJOYD
01QCOyUcFrt757RfALWGyHbh113rdDfbvMcHYEqprsv0mYVlOBY0e+6iLxzUUWWK
MQxDEEb9AgMBAAECggEAVqtZ80DM6tqtRooYgXWdnjFJptYNdDqL7QXx0r0dOYaP
n3w8c8d/lfcfthyfHP9wYoCofZWbvXXXaiS1EDPmHcF/dQANgxUunNy5Qd7YDx19
Sq5NerGZr0ox9QeTggq1AJgly08MENXVCHeGmCF+1E9vkTSPzStYjt4g5z7T8dWX
FQsm6uFsVmaAIZdtILBvgNPUtIvhzA2qOsSlh5qRGX5ZLeV1lrKc6kKsUQVphP/6
rKHToavgQwKV8xGU5uguYXEoBkh0Jh6lszzpfPOUOlTpDC3bE+zLtNM6Qci8KAU1
h8RyvGAhgL3ILP8FIqpcUlBG9Zfr03dOGTJv51Lk4QKBgQDUSlB5gFnVHq4VPq6Q
Rw/DDSqcVHpT0SILUM8VjD9cMD78Cj8BKXcPR9egb/oAM9UhV3VtuGBTd60TEqLS
n4gsuqNk1EfdpPrgA6ou2mG3iDmJ/DENQrZj8ZRMdmA9512bebg6Zuj2OMDD00T5
u4JuFYWPn3f1DLjxsWEQ8GzQlwKBgQDD+Fmx+tMTHS0++ISBe3HVZUWLx4ptgBw+
5PizC1ghP8DmF0n8UIufskFiwEWwYgI2IpJHb2PWK3wZFcjhBco7RaRxpQBOfxY/
wtoB/DfBvBw3aLGee+rt5sZ7tmLOzFrVPeiy0xInBh30mQuFYYZR1dx2hczEM9sB
LGxN3qjDiwKBgGd3yP1PJ3mOOH62TFKZr/77Pddv/Sc4+QTW3/e6oW8HPMuPGuIw
GY1jEJ9rtEfA+5IClINjp99Gpx5yqNVLWA2k8dpE9Ln8nSHt51ZqrdHMHW85cZbq
+wZ/Si5yS7ogOCl9C+O7ILRROPK42Bd34rxQ1QYJTWgsST/TmmGtLPwFAoGAHnnw
+QzY5pATCUf802YvPdCSEDrn/D+AJQfW5YFOI12W0jGs/+BG1n8STBk6vUOAtIqL
1TAthpEcq4oHw3bzDGS4PjQ65/o7q47R+J0QzsBCYxuVA+ChmH3bQEIM+7wsJB2M
osLQf+Ejp3ZlpEiWawOnVYdZYOnvlS8jaLjH5iECgYAIhsmuk5NLEv0egYT0ArZU
xsa5lSL8gvTd+zHjMexnhYjlfuKFJlBh9mWPq15giSaVgQ2ZfeclQYsnhqBhC/FJ
GUwKlC6+LBQb8YQhEWlqMeE842C27ziekPmMSDnLmu+/nUbSXS6svoVvHvhms6F+
Yggin4TQCTeuzmI8fSXQwg==`,
    data: [{ name: '232', get: 10 }]

  })
  ,
  actions: {
    getInfo(data: any) {
      let aesKey:any = rsaDecrypt(data.key, this.privateKey)
      const crypto = new Crypto(aesKey)
      let reqdata=crypto.decrypt(data.data)
      let datas=crypto.encrypt(this.data)
      return datas

    },
    addInfo(data: any) {
      let aesKey:any = rsaDecrypt(data.key, this.privateKey)
      const crypto = new Crypto(aesKey)
      let resData=crypto.decrypt(data.data)
      return crypto.decrypt(this.data)
    }
  }
})
export default useTestStore