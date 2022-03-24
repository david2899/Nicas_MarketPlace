import monkeyIM from "../../assets/img/Monkeys.png";
import { MdBuild } from 'react-icons/md';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { FaRegHandshake, FaShoppingCart } from 'react-icons/fa';
import {  MdKitesurfing } from 'react-icons/md';
import "./activities.css";

export const Activities = () => {
  return (
    <div className="content-activities">
      <section className="content-text ">
        <h1>Nicas NFT</h1>
        <ul>
          <li>
              <span><MdBuild className="icons-activities" /></span>
            <h4>Build Collections</h4>
          </li>
          <li>
          <span><VscGitPullRequestCreate className="icons-activities" /></span>
            <h4>Create NFTs</h4>
          </li>
          <li>
          <span><FaRegHandshake className="icons-activities" /></span>
            <h4>Sell NFTs</h4>
          </li>
          <li>
          <span><FaShoppingCart className="icons-activities" /></span>
            <h4>Shop NFTs</h4>
          </li>
          <li>
          <span><MdKitesurfing className="icons-activities" /></span>
            <h4>Browse on a secure BlockChain</h4>
          </li>
        </ul>
        <p>The leading market in Central America with the Flow Blockchain.</p>
      </section>
      <img className="" src={monkeyIM} />
    </div>
  );
};
