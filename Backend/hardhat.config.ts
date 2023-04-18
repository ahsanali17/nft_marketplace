const fs = require('fs')

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const privateKey = fs.readFileSync("../.secret").toString().trim();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1337
    },
  },
  solidity: "0.8.19",
};

export default config;
