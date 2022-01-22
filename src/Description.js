const Description = ({title, punycode , nmcAsset, registration}) => {
   return (
    <div>
        <p>Title: {title}</p>
        <ul>
          <li>
            Decoded Asset: {punycode}
          </li>
          <li>
            Asset: {nmcAsset}
          </li>
          <li>
            Mint: {registration}
          </li>
        </ul>
        <p>
        A few pioneers in the blockchain space used an encoding language called "punycode" 
        to encode various forms of art, emojis, alphabets and words as non-fungible assets, 
        onto the Namecoin blockchain. In hindsight, this gave birth to one of the 1st NFT 
        collections in the history of cryptographic collectables: Punycodes.
        </p>
        <p>
        Note, Namecoin is a DNS & thus assets need to be renewed (every 9 months). Have a small $NMC in your vault & it'll autorenew.
        </p>
        <p>
        1 $NMC = Autorenewal for 5 years 
        </p>
        <p>
        10 $NMC = Autorenewal for 50 years
        </p>
    </div>
   )
}

export default Description;