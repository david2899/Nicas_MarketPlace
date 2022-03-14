import * as fcl from "@onflow/fcl";
import {NicaNFTContract, NonFungibleToken} from "../../config/network_address"

export const CreateCollections = () => {

    const create = async (nameCollection, banner) => {
        try {
            const encoded = await fcl.send([
                fcl.transaction`
            import NicaNFTContract from ${NicaNFTContract}
            import NonFungibleToken from ${NonFungibleToken}

            /* ## This transaction creates a collection ## */
            transaction {

            prepare(acct: AuthAccount) {

            let nameCollection : String = "${nameCollection}";
            let banner : String = "https://gateway.pinata.cloud/ipfs/${banner}";
                    

            let providerStorage = /storage/collection1
            let providerPrivate = /private/collection1
            let providerPublic = /public/collection1

            if acct.borrow<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>(from: providerStorage) == nil {
            log("to create collection")
            let collection <- NicaNFTContract.createEmptyCollectionNFT(name: nameCollection, banner: banner)
            acct.save(<- collection, to: providerStorage)

            if acct.borrow<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>(from: providerStorage) == nil {
                    log("nil again")
            }
            
            acct.link<&NicaNFTContract.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic}>(providerPrivate, target: providerStorage)
            acct.link<&NicaNFTContract.Collection{NonFungibleToken.CollectionPublic, NicaNFTContract.CollectionPublic}>(providerPublic, target: providerStorage)
                        
            } else {
                panic("Collection was created")
                    }
            }

            execute {
                log("Collection Created Succes")
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
    create
  }
}
