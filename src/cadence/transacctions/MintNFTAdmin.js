import * as fcl from "@onflow/fcl";
import {NicaNFTContract, NonFungibleToken} from "../../config/network_address"

export const MintNFTAdmin = () => {

    const mintNFTAdmin = async (nameNFT, nftType, description, uriImage) => {
        try {
            const encoded = await fcl.send([
                fcl.transaction`
                import NicaNFTContract from ${NicaNFTContract}
                import NonFungibleToken from ${NonFungibleToken}
                
                  /* ## This Transacction Minst NFT*/
                transaction {
                
                  let admin: AuthAccount
                  let collection : Capability<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>
                
                  prepare(acct: AuthAccount) {
                
                  self.admin = acct
                
                    let providerStorage = /storage/collection1
                    let providerPrivate = /private/collection1
                    let providerPublic = /public/NFTtemplate1
                    let providerStorageTemplate = /storage/NFTtemplate2
                  
                        if acct.borrow<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>(from: providerStorage) == nil {
                            panic("Collection not created")
                        }
                        self.collection = acct.getCapability<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>(providerPrivate)
                
                        let nameNFT = "${nameNFT}";
                        let nftType= "${nftType}";
                        let description = "${description}";
                        let uriImage = "https://gateway.pinata.cloud/ipfs/${uriImage}"
                         let metadataNFT : {String : String} = {
                            "uriMovie": "https://gateway.pinata.cloud/ipfs/QmaUPpKUrT2x5eeHXocEgeKJ7avD4ApoNeSqFqHAERCxC9"
                        }
                
                        let nftTemplate <- NicaNFTContract.createNFTTemplate(
                            name: nameNFT,
                            nftType: nftType, 
                            metadata: metadataNFT, 
                            thumbnail: uriImage,
                            description: description,
                            collection: self.collection
                        )
                        acct.save(<- nftTemplate, to: providerStorageTemplate)
                  }
                
                  execute {
                    log("NFT Created Succes")
                  }
                }
                `,
                fcl.payer(fcl.authz),
                fcl.proposer(fcl.authz),
                fcl.authorizations([fcl.authz]),
                fcl.limit(9999)
            ])
            const resp = await fcl.tx(encoded).onceSealed();
            return resp
        } catch (error) {
            console.log(error)
        }
    }

  return {
    mintNFTAdmin
  }
}
