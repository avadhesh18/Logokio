var monochrome = false;

class TextMeasurer {
  constructor() {
    const SVG_NS = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS(SVG_NS, 'svg');
    this.svg.style.visibility = 'hidden';
    this.svg.setAttribute('xmlns', SVG_NS)
    this.svg.setAttribute('width', 0);
    this.svg.setAttribute('height', 0);

    this.svgtext = document.createElementNS(SVG_NS, 'text');
    this.svg.appendChild(this.svgtext);
    this.svgtext.setAttribute('x', 0);
    this.svgtext.setAttribute('y', 0);
       this.svg.setAttribute('id', 'svgtest');
    document.querySelector('body').appendChild(this.svg);
  }

  measureText(text, fontFamily, fontSize) {
    this.svgtext.setAttribute('font-family', fontFamily);
    this.svgtext.setAttribute('font-size', fontSize);
    this.svgtext.textContent = text;

    let bbox = this.svgtext.getBBox();
    let textLength = this.svgtext.getComputedTextLength();
    let baseX = parseInt(this.svgtext.getAttribute('x'));
    let overflow = bbox.width - textLength;
    let leadX = Math.abs(baseX - bbox.x);
    let trailX = overflow - leadX;
var elemb = document.getElementById('svgtest') ; elemb.parentNode.removeChild(elemb);
    return {
      bbWidth: bbox.width,
      textLength: textLength,
      leadX: leadX,
      trailX: trailX,
      bbHeight: bbox.height
    };
  }
}
const impcolors = [ "000000","ffffff","000000","ffffff","000000","ffffff","000000","ffffff","0099e5", "ff4c4c", "34bf49", "00a98f","000000","027b50","be0027","e05b26","e71419","049770","1097dc","ffefe7","e8aac5","feb527","000100","05a5b3","eb3d7a","06381f", "cf8d2e", "e4e932", "2c9f45", "371777", "52325d", "511378", "ff0000", "fbb034", "ffdd00", "c1d82f", "00a4e4", "8a7967", "6a737b", "0abf53", "00112c", "279b37", "008374", "89ba16", "fefefe", "d20962", "f47721", "7ac143", "00a78e", "00bce4", "7d3f98", "037ef3", "f85a40", "00c16e", "7552cc", "0cb9c1", "f48924", "ffc845", "52565e", "caccd1", "f3f4f7", "ffd900", "fd5c63", "74d2e7", "48a9c5", "0085ad", "8db9ca", "4298b5", "005670", "00205b", "009f4d", "84bd00", "efdf00", "fe5000", "e4002b", "da1884", "a51890", "0077c8", "008eaa", "0099cc", "ff9933", "0079c1", "49176d", "00a0af", "49a942", "050f2c", "003666", "00aeff", "3369e7", "8e43e7", "b84592", "ff4f81", "ff6c5f", "ffc168", "2dde98", "1cc7d0", "ff6a00", "0c3866", "49c0b6", "222222", "ce181e", "007cc0", "ffc20e", "ed1c24", "ff9900", "146eb4", "002663", "4d4f53", "ed1b2e", "6d6e70", "d7d7d8", "b4a996", "ecb731", "8ec06c", "537b35", "c4dff6", "56a0d3", "0091cd", "004b79", "7f181b", "9f9fa3", "1c79c0", "0dd3ff", "0389ff", "a4c639", "7fbb00", "b52e31", "136ad5", "fb8a2e", "ff0b00", "00c4ff", "ea1d5d", "1793d1", "333333", "990033", "ffb310", "004d73", "00334e", "007fdb", "dbebfa", "832561", "11862f", "bfca02", "848a8c", "007fbd", "ff4e00", "01cd74", "3be8b0", "1aafd0", "6a67ce", "ffb900", "fc636b", "db3552", "ff322e", "00a8e0", "a71930", "a5acaf", "013ca6", "a5a9ab", "003366", "0066a1", "231f20", "bfbfbf", "00b2a9", "a626aa", "6639b7", "aea400", "ff6319", "ffffff", "f50537", "16214d", "44c7f4", "eb5424", "d0d2d3", "ff7800", "2d364c", "6534ac", "d40000", "de0f17", "2529d8", "629aa9", "00aeef", "00395d", "2a5934", "b3dcff", "5ecc62", "00ad45", "e01f3d", "e04646", "1769ff", "003b64", "fff200", "a0ac48", "70b29c", "505050", "a3a3a3", "205081", "ee6123", "61b3de", "005387", "8cb811", "fdb813", "88aca1", "788cb6", "a1a1a4", "8f8f8c", "123962", "2754ba", "00aee6", "799eb2", "b1d4e5", "f57d00", "0033a1", "09347a", "007dc3", "0169a4", "3399cc", "f1632a", "464646", "b7b7b7", "f6f6f5", "8996a0", "003580", "009fe3", "feba02", "666666", "f2f6fa", "2b80ff", "ffcc2f", "ef5734", "00acee", "2baf2b", "543729", "cecece", "0061d5", "ce1126", "003f87", "075aaa", "eb2226", "01295c", "efe9e5", "aca095", "b9cfed", "a7a9ac", "c90f23", "d52685", "553a99", "6cbc35", "fd9f3e", "08538c", "168eea", "ee4f4f", "fff9ea", "76b852", "323b43", "59626a", "ced7df", "eff3f6", "f4f7f9", "00d1b2", "ec1c24", "fdbd10", "0066b2", "ed7902", "ee3322", "00aaff", "472f92", "bc0024", "00c4cc", "6a3be4", "004977", "d03027", "613854", "00387b", "bb1e10", "f67828", "237f52", "388ed1", "d74e26", "006837", "fa9f1e", "f7931e", "ed008c", "fff000", "84754e", "a6192e", "decba5", "ec2c22", "2e1f54", "52057f", "bf033b", "f00a36", "ed3b21", "ff6908", "ffc719", "598c14", "335238", "4a8594", "051736", "706357", "b0a696", "dbe0e3", "dbeede", "ffc907", "2e9df7", "ff7243", "60afdc", "f66733", "522d80", "d4c99e", "685c53", "a25016", "562e19", "86898c", "f9e498", "566127", "3a4958", "b5c327", "109dc0", "213e97", "ffac25", "d0002c", "ff4816", "f38020", "faae40", "404041", "292526", "cd004b", "f37023", "fcb711", "0eb24e", "0087d2", "6561ac", "cc0000", "282828", "ed1c16", "616f67", "c68143", "f65a5b", "204056", "0ebeff", "47cf73", "ae63e4", "fcd000", "ff3c41", "76daff", "d2ea32", "016773", "439fd3", "f6b128", "ffa500", "00a5dc", "004eaf", "2db928", "057855", "ff2d37", "737373", "969696", "cdcdcd", "f0f0f0", "689550", "85c446", "c0de9e", "b9dca4", "da5a47", "b62b6e", "9628c6", "4374b7", "abb8af", "98c807", "b1a24a", "edd812", "ef9421", "d13814", "8ba753", "30660f", "b8cc1c", "830051", "cf0072", "d9e506", "ff7900", "00c6d7", "766a65", "2292a7", "005696", "1d1d1b", "ae9a64", "e42313", "8b8c8d", "00d2f3", "263f6a", "182b45", "6b0f24", "193725", "606061", "774aa4", "095280", "00a1f1", "a80030", "ffed00", "ff0092", "c2ff00", "00c7f2", "c1f1fc", "ebffac", "ffc2e5", "ffaaaa", "334858", "cd595a", "94938f", "a3a7a6", "dbc5b0", "f8dfc2", "f9ebdf", "3399ff", "222222", "eeeeee", "00c1b2", "0085c3", "7ab800", "f2af00", "dc5034", "b7295a", "6e2585", "71c6c1", "5482ab", "009bbb", "444444", "c8102e", "862633", "003a70", "f99104", "00b7c9", "2d72d9", "e64b50", "dbc65d", "0a0a0a", "05cc47", "4dc47d", "181a1b", "febd17", "ba0c2f", "ffcd00", "c9c9c9", "003f69", "954010", "445c6e", "005238", "97824b", "005be2", "008bcf", "fdb94e", "f9a852", "f69653", "f38654", "f07654", "ed6856", "ef5956", "ee4c58", "56c1ab", "6a6b6a", "f05d21", "2c5770", "0f723a", "c7c8ca", "666666", "00a6d6", "00629b", "003865", "f5df2e", "5865f2", "57f287", "fee75c", "eb459e", "ed4245", "2c2f33", "23272a", "ec1944", "0af167", "ee70a6", "520099", "39eafd", "0d0735", "f5f5f5", "2e9fff", "092e20", "0db7ed", "384d54", "0b648f", "e21737", "e80033", "fdbb30", "ed8b00", "f15d22", "bf0d3e", "910048", "d0006f", "ea4c89", "8aba56", "ff8833", "00b6e3", "9ba5a8", "007ee5", "7b8994", "47525d", "3d464d", "5654a4", "0077c0", "81ceff", "00598e", "e37151", "de5833", "e5e5e5", "5b9e4d", "4495d4", "001a57", "2da9d7", "212a3e", "7ac70c", "8ee000", "faa918", "ffc715", "d33131", "e53838", "1cb0f6", "14d4f4", "8549ba", "a560e8", "4c4c4c", "6f6f6f", "cfcfcf", "bff199", "f7c8c9", "ff7404", "6633cc", "99cc00", "6d1d7c", "ff6600", "58595b", "e53238", "0064d2", "f5af02", "86b817", "131137", "918978", "0d69af", "f23819", "314855", "5cc3e8", "ffdb00", "79ceb8", "e95f5c", "87aa14", "40b3ff", "82b541", "39c2d7", "a3c644", "464547", "b22746", "8e244d", "ff2052", "e6e6e6", "404040", "01b5dd", "b0db64", "002561", "0d9ddb", "48b8e7", "efecea", "2c2b2b", "ff0033", "6a9c84", "790f59", "373b9c", "f784b6", "39b7dd", "ccc900", "d5641c", "33cc99", "4ba6f5", "fdca30", "f79400", "f34235", "ff8000", "2dbe60", "7b868a", "2facb2", "166a8f", "3b4446", "525e61", "aeb6b8", "d7dcdd", "eff2f3", "203143", "da9a39", "00a0e9", "dd0017", "1877f2", "6caddf", "b06010", "004990", "b50938", "a6a685", "fa5c4f", "3098dc", "494e58", "4d148c", "2bb24c", "f9b949", "e32119", "96172e", "6d2d41", "d6182a", "e66000", "ff9500", "ffcb00", "00539f", "0095dd", "331e54", "002147", "ff8e00", "955214", "55601c", "005172", "4cc2c4", "f54785", "343434", "ed174f", "fbb040", "efc402", "d4891c", "00b22d", "ed713a", "f67c1a", "338d11", "f10087", "009ae7", "0063dc", "ff0084", "e12828", "2971b2", "3fa9f5", "989898", "f8f8f8", "4dc9f6", "f67019", "f53794", "537bc4", "acc236", "228ae6", "1c396d", "ee3440", "5b9a68", "f94877", "0732a2", "2d5be3", "006400", "ff9c2a", "ff4025", "3949ab", "efefef", "0f99d6", "00457c", "e8d4a2", "009bff", "007cc3", "484848", "2f6f7e", "1b212b", "1e72bd", "4a742c", "041e42", "a99260", "212425", "718087", "5ba4e5", "9fbb58", "e9e8dd", "436f8e", "887d59", "8f9696", "d6156c", "4078c0", "6cc644", "bd2c00", "c9510c", "6e5494", "fafafa", "333333", "fca326", "fc6d26", "e24329", "554488", "46bc99", "f68d42", "ed1965", "f2f0ed", "3a3133", "663300", "339966", "f36f21", "72635c", "aca6a2", "7db701", "ff8a00", "a5c500", "810061", "303600", "ec6400", "d4c78c", "5ec6f2", "003468", "4b1702", "717a83", "e80029", "40b4e5", "7c868d", "553b08", "4285f4", "34a853", "fbbc05", "ea4335", "dd4b39", "099d84", "4d9db3", "456acf", "8762c9", "ad182d", "e15f5f", "1e8cbe", "e30061", "d5df00", "475258", "0b2d27", "82b548", "fba919", "463014", "8f1010", "204030", "a11826", "0f403f", "72ef36", "3b3141", "f0ece6", "0863b5", "fec600", "f39100", "e3001f", "e50064", "954a97", "009ee3", "13a538", "ff4000", "0f9d58", "0087b4", "008200", "205527", "ff2b00", "c3c3c3", "0093d0", "3197d6", "394956", "d6dde3", "c9c3e6", "6762a6", "00b388", "425563", "fd9827", "a26eea", "f7afff", "5d70ea", "46b7fd", "f96302", "2a6ebb", "003265", "f7e8d5", "ffbd0a", "c6af92", "71685f", "54493f", "38322d", "7ac142", "0096d6", "d7410b", "db0011", "e34f26", "66aa33", "99cc33", "41811e", "e8e8e8", "cb272c", "6d6e71", "bf5b20", "006e96", "8c8700", "ad5f7d", "d79100", "006699", "32c24d", "cc0066", "79afc1", "789240", "7d0100", "8baaff", "33ccff", "ff4400", "c6002b", "ffcc00", "003399", "f5de50", "85bf25", "2164f4", "eb1478", "ff6200", "000066", "60ab59", "405de6", "5851db", "833ab4", "c13584", "e1306c", "fd1d1d", "f56040", "f77737", "fcaf45", "ffdc80", "0d1a2b", "1565c0", "1e88e5", "bcced6", "f2f7f9", "428bca", "0f7dc2", "0c1c2c", "3a82e4", "40b2a4", "eff2ec", "dedad0", "d0e6da", "085856", "24366e", "143e50", "7e245c", "d25238", "eeca4a", "365ebf", "ff3366", "252b33", "2f7bbd", "323a45", "8a959e", "d4d7da", "e9ebec", "5fc9f8", "fecb2e", "fd9426", "fc3158", "147efb", "53d769", "fc3d39", "8e8e93", "1e1f56", "f36d5d", "fe423f", "02a388", "0c0d0d", "e8eded", "dce1e1", "f7df1e", "669c34", "72af3a", "f44321", "5091cd", "f9a541", "0769ad", "7acef4", "006c54", "d52a1d", "00a9c0", "9cb443", "242f3a", "c21a30", "2bde73", "0f2105", "82bc23", "3db4e7", "d51007", "d70021", "63a541", "236133", "26b6e8", "00b0df", "00a1e4", "03cce6", "29c876", "ff4081", "fdce2e", "f5f4f2", "cccccc", "ff3939", "ddb321", "f55247", "d32d27", "af0809", "0c2340", "00a3e0", "ede04b", "333f48", "d9e1e2", "f6ec35", "d11013", "00c300", "0a66c2", "83941f", "e7a33e", "f5987e", "56687a", "004182", "44712e", "915907", "b24020", "38434f", "dce6f1", "d7ebce", "fce2ba", "fadfd8", "e9e5df", "fdfaf5", "cf202e", "232121", "f78822", "f6db35", "6dc067", "4185be", "8f499c", "d81f2a", "e0d86e", "9ea900", "6ec9e0", "007ea3", "9e4770", "631d76", "1e1e1e", "006fbf", "ff7b00", "008ecf", "09263c", "020b13", "e3f1f8", "073857", "eb0028", "00a0df", "000099", "cc3333", "15b6e5", "576396", "ff00bf", "352384", "333447", "f3f3f5", "f46f25", "168de2", "ffa930", "239ab9", "52bad5", "6dc5dc", "373737", "5d5c5d", "34be5b", "3bb2d0", "3887be", "8a8acb", "56b881", "50667f", "41afa5", "f9886c", "e55e5e", "ed6498", "fbb03b", "142736", "28353d", "222b30", "a31f34", "8a8b8c", "c2c0bf", "004a77", "00adee", "ff8100", "ffd200", "bd0017", "ffc836", "264f36", "00ab6c", "e0393e", "0a4d8c", "dd1321", "ffe600", "2d3277", "0084ff", "0082fb", "0064e0", "18453b", "008208", "7bbd00", "0b9a6d", "f65314", "7cbb00", "ffbb00", "783bd2", "ea3e23", "0078d7", "9b4dca", "f4f5f6", "606c76", "52aad8", "273a4b", "1d2d3b", "a086d3", "000088", "ee1d23", "db1f29", "c6d6df", "ec4534", "589636", "ce1141", "eeb111", "e87d1e", "94ce08", "00386b", "969491", "949483", "f47b7b", "9f1f5c", "ef9020", "00af3e", "85b7e2", "29245c", "ffd616", "e5352b", "e990ab", "0081b4", "96cbb3", "91be3e", "39a6dd", "eb0973", "dde2e0", "333c41", "5c92fa", "c13832", "d7d3c8", "4d4e53", "ff6050", "ff0e83", "d54262", "813867", "66336e", "341539", "5677fc", "9013fe", "ffc208", "00cc99", "1fadc5", "2e51a2", "00758f", "f29111", "2b697a", "93dee8", "5a2e14", "fc3d21", "0b3d91", "ffd659", "007ac2", "0071bf", "e1ac26", "dc380f", "9f0812", "6347b2", "368dd5", "70af1e", "7e887a", "00afd8", "7b858e", "e50914", "221f1f", "f5f5f1", "39bd00", "ce2724", "f3ec19", "207c88", "aac1bf", "e8e9d7", "4c4d4f", "2a2a2a", "44355b", "31263e", "ee5622", "221e22", "ff8200", "f0537a", "19975d", "013369", "d50a0a", "005eb8", "504847", "27a770", "4bad31", "f5dc00", "e95814", "e2142d", "75af42", "a98c66", "12191c", "6f7f8d", "e60012", "8c8c8c", "215732", "6cc24a", "44883e", "124191", "0390d8", "003466", "557665", "4e2a84", "836eaa", "401f68", "b6acd1", "e4e0ee", "342f2e", "716c6b", "bbb8b8", "d8d6d6", "765438", "a13323", "e65124", "ec7f22", "f8b22a", "ffd430", "cb3837", "ffc61e", "00337f", "003082", "ffc917", "76b900", "51007a", "dbe800", "d0d3d4", "7c878e", "e2002a", "6e6e6e", "ed812b", "008272", "001f2d", "008fd4", "696969", "8d989a", "744da8", "1fb3e0", "49c219", "f4dc2a", "eeb417", "d65129", "08107b", "dfb226", "777777", "eb0029", "1b5faa", "90cef1", "eeaf00", "cc0f16", "9c9e9f", "7f7f7f", "dc4405", "c7202c", "060606", "171717", "d34037efcbaddee", "004b91", "00274d", "0076c0", "000007", "d6e03d", "e5c5bb", "0f58a8", "005483", "ee3423", "f96854", "052d49", "f05000", "22d0b8", "34c950", "8de86e", "003087", "009cde", "012169", "ed6b06", "9d1348", "008b5d", "364395", "ff6900", "ee7200", "e32934", "004883", "3aa4c6", "d75444", "616365", "d6006e", "75d1e0", "7dba00", "cc292b", "00a950", "f8971d", "f7d417", "4a245e", "f26649", "0e5fd8", "0ea0db", "8892be", "4f5b93", "99cc99", "5dbe57", "0000e6", "e60023", "ee3124", "00a160", "ffc425", "6585ed", "f5756c", "98afc0", "2f3148", "414f5a", "e5a00d", "282a2d", "ef4056", "50bcb6", "d52b1e", "00a3e2", "1ba548", "fdc800", "f1860e", "e41b13", "0099ff", "fb0a2a", "17ad49", "ef5b25", "36454f", "df0067", "251b5b", "25b9d7", "fbbb22", "68737f", "bbbfc3", "318bff", "1885bf", "ee7f2d", "da552f", "534540", "988f8c", "00b27f", "505264", "8a90c7", "44403f", "696965", "ba2026", "ae946d", "c28e0e", "98700d", "ffde57", "4584b6", "646464", "e0001b", "6b5aed", "262a3e", "fafafc", "63ebe4", "e10019", "4257b2", "3ccfcf", "ff5454", "a82400", "66ceff", "c7053d", "8cc04b", "00ff00", "e11b22", "0054a4", "00d8ff", "990000", "f29023", "4d5255", "ff4500", "5f99cf", "cee3f8", "a02021", "0a2239", "01b287", "ff9f1c", "e5505a", "854c9e", "999999", "f58021", "ed1c27", "b32317", "f58025", "3a6e8f", "87b2d8", "8d8b00", "c1d72f", "e43526", "f36e21", "513127", "f76902", "0ba6ab", "6f1ab1", "680021", "fffaec", "939598", "e22027", "a1cd3d", "003e70", "62b0d9", "0098db", "ecc400", "fdd800", "3f1a0a", "edd51c", "1b5692", "c32128", "43a756", "de8a3d", "74a2d7", "f0c33b", "9fc54d", "ffff00", "f26522", "cc342d", "cc0033", "073590", "f1c933", "2091eb", "e50000", "111111", "00dc06", "ec8a00", "1798c1", "ff1100", "1428a0", "75787b", "0689d8", "ffc600", "c800a1", "685bc7", "0057b8", "00a9e0", "009ca6", "00b140", "e91e22", "c8aa76", "fd5a1e", "4d2177", "84a40b", "004851", "009a44", "0095c8", "003da5", "002855", "ad1aac", "7c3a2d", "8c857b", "1a7bba", "1f4fa3", "f14728", "004488", "0088ff", "ffaa00", "ff7700", "9911aa", "cc2288", "aadd22", "242424", "949494", "e4e4e4", "f4f4f4", "0168b3", "ee3e34", "96bf48", "479ccf", "2d3538", "f2f7fa", "f01f74", "009999", "f26b21", "68b8be", "00800d", "00aff0", "00338d", "6ecadc", "e9a820", "e01563", "3eb991", "0077b5", "7c9cb0", "e53b2c", "41b7d8", "fffc00", "6cb33f", "4a494d", "29c4d0", "f29556", "84afa2", "72c427", "f24c7c", "00aaf2", "008ace", "f80046", "0c88b1", "d8a158", "ba4724", "1c5f4a", "d8d8d8", "7c8285", "bfbdb0", "b1b134", "bbd634", "dbe3b6", "b2c8bd", "165b65", "697d99", "96b8db", "00a4e8", "a4dbdb", "fdd666", "dc9018", "e31a22", "df8f2d", "b24f3f", "b51f29", "f58268", "f4979c", "fedf00", "a7a8aa", "ff8800", "ff3300", "fc00c1", "1db954", "191414", "ffe100", "75dd66", "59cb59", "2bb656", "0ca750", "f3f4f4", "364141", "28c101", "1e5397", "376db6", "4ca2da", "91d8f4", "f48024", "222426", "bcbbbb", "2c8aec", "00704a", "e1261c", "d7584f", "3b5a6f", "828a87", "9db7c4", "ccd7dd", "838f97", "002054", "79bde9", "ffc423", "bc9b6a", "f97200", "010101", "8b8b64", "bbbdc0", "fc4c02", "0f90fa", "00afe1", "ff7300", "eb4924", "489e3b", "fabd42", "cd0a20", "e61718", "e8e9ea", "595a5c", "00447c", "fdb913", "e36f1e", "ffcd1a", "f06d1f", "ffa633", "e20074", "e74635", "b8b8b8", "72a114", "9dce0a", "879b89", "2580c3", "1c2537", "e0e0e0", "25dd85", "339900", "e62b1e", "0088cc", "e92c4c", "c82641", "a41e35", "899197", "ee1c2e", "500000", "003c71", "5b6236", "744f28", "998542", "332c2c", "707373", "d6d3c4", "ee8421", "8c8a8a", "293f6f", "a67a00", "ff3c1f", "26313b", "4e5860", "a6abaf", "d9e0e2", "fafbfc", "006b95", "4f5b65", "b3812a", "a01a1f", "b90c13", "00745e", "086556", "8560a8", "431c69", "555555", "e9e9e9", "f7f7f7", "da3d34", "00a480", "ed9f40", "6a76ac", "17170e", "534b38", "a6a480", "66bd00", "eb0a1e", "6fbc6d", "47535b", "0079bf", "70b500", "ff9f1a", "eb5a46", "f2d600", "c377e0", "ff78cb", "00c2e0", "51e898", "c4c9cc", "00af87", "5eab1f", "e12729", "f37324", "f8cc1b", "72b043", "007f4e", "c8c8c8", "35465c", "c30f24", "355ebe", "d52b1d", "1ec95b", "043623", "eff5f0", "9146ff", "f0f0ff", "1da1f2", "14171a", "657786", "aab8c2", "e1e8ed", "f5f8fa", "98ce1e", "d2de61", "3178c6", "00273f", "ff8700", "09091a", "c0c0c8", "1fbad6", "dd4814", "77216f", "5e2750", "2c001e", "aea79f", "003262", "3b7ea1", "fdb515", "c4820e", "052049", "18a3ac", "90bd31", "178ccb", "10167f", "fe230a", "ff9600", "000064", "b41428", "f57814", "e6d7aa", "f0e6c8", "7c81b8", "ff967d", "ffc87d", "222c37", "00cccc", "fff600", "ff0066", "19e3b1", "ff7f33", "b83c82", "e2001a", "009cd1", "3b515b", "46166b", "eeb211", "006c68", "97a4af", "005bbb", "e56a54", "ffc72c", "ebec00", "00a69c", "ad841f", "6da04b", "006570", "2f9fd0", "002f56", "007c41", "ffdb05", "d6083b", "0072cf", "ea7125", "55a51c", "8f2bbc", "00b1c1", "e00122", "004b8d", "faf2f3", "d1cdb8", "cf0a2c", "0082ca", "199051", "e76829", "fa4616", "0021a5", "131f33", "fa6300", "005daa", "00274c", "ffcb05", "4b9cd3", "007fae", "13294b", "e1e1e1", "767676", "151515", "154733", "fee123", "ffd100", "003b71", "bf5700", "005f86", "43695b", "f2a900", "382f2d", "d6d2c4", "005493", "f5aa1c", "c63527", "002754", "4b2e83", "b7a57a", "85754d", "ffd54f", "000000", "ffbd00", "98c646", "694d88", "5382af", "d06d34", "5f9a38", "474d52", "c822b0", "351c15", "ffb500", "64a70b", "333366", "e71921", "218748", "3388ff", "f2f2f2", "3285dc", "f07355", "59267c", "8f5db7", "e2d4e7", "a5cfd5", "81cd50", "f82a53", "9f2af8", "aaaaaa", "dff0d8", "3c9cd7", "d24663", "162221", "1ab7ea", "00b488", "1e91d0", "c3092d", "222221", "a93c3b", "a896a0", "7a3671", "bd1d65", "1a1f71", "f7b600", "31577a", "14acf2", "f04494", "0ac578", "45668e", "e60000", "4a4d4e", "9c2aa0", "00b0ca", "007c92", "a8b400", "fecb00", "eb9800", "003057", "115740", "65665c", "517891", "212721", "42b883", "35495e", "9e7e38", "82231c", "511536", "443e67", "375669", "456525", "59786c", "3d3c1d", "625750", "e31837", "f37520", "489cd4", "2774a6", "35393d", "007dc6", "79b9e7", "f47421", "76c143", "ffc120", "e7f0f7", "f2f8fd", "414b56", "00a2e1", "1c2d37", "4ec7c4", "00959f", "3b9bcc", "eea642", "7bb32e", "e2203d", "199fda", "005195", "028948", "ffd400", "0067b3", "9d0a0e", "003369", "075e54", "128c7e", "25d366", "dcf8c6", "34b7f1", "ece5dd", "4aae20", "6cc751", "225f1e", "f8cc07", "ff9300", "e44436", "cd3292", "37aef3", "0076ba", "005888", "8732cd", "33482c", "2fa5d6", "b52f2c", "0063bf", "636466", "002050", "d83b01", "e81123", "b4009e", "5c2d91", "107c10", "68217a", "96588a", "3c3c3c", "71b02f", "5b009c", "21759b", "d54e21", "0087be", "78dcfa", "00aadc", "005082", "87a6bc", "f3f6f8", "e9eff3", "a8bece", "668eaa", "4f748e", "3d596d", "2e4453", "f0821e", "4ab866", "f0b849", "d94f4f", "622599", "0054a0", "aaba0a", "dd7500", "e23d28", "3d8e33", "ff3399", "fcd116", "e66760", "8c88cd", "69c5e4", "ffdf8b", "61e064", "2b96f1", "d7182a", "9ea2a2", "52b043", "f59714", "06b3e8", "7a7e85", "6138f5", "1f69ff", "008558", "e64f00", "e6004d", "026466", "cfdc00", "3299cc", "410093", "af0606", "d8582b", "16a314", "3b6fba", "9b59b6", "e74c3c", "8e44ad", "2980b9", "f1c40f", "16a085", "34495e", "3498db", "2ecc71", "1abc9c", "e16120", "3a9691", "363533", "ff4a00", "fd7622", "ffc43e", "5f6c72", "499df3", "13d0ab", "00363d", "f79a3e", "eb6651", "30aabc", "eb4962", "37b8af", "78a300", "f0ca28", "9dbc7a", "1277e1", "cb202d", "2d2d2d", "f4f4f2", "2d8cff", "f26d21", "ff9d3b"
];

const hexToRgb = hex => hex.match(/\w\w/g).map(x => parseInt(x, 16));
function generateCSSLink(fontName, fontVariant) {
  if(document.getElementById('logotext') && typeof document.getElementById('logotext').value !== "undefined" ){
 thetexttoload = document.getElementById('logotext').value;
 theurltoload = '&text='+encodeURIComponent(thetexttoload);
}
else{ theurltoload = '';}

  let cssLink = `https://fonts.googleapis.com/css2?family=${fontName.replaceAll(' ', '+')}`;
  const fontWeight = fontVariant.replace(/[a-z]+/g, '');

  if (fontVariant.includes('italic')) {
    cssLink += fontWeight ? `:ital,wght@1,${fontWeight}` : ':ital@1';
    return `${cssLink}&display=swap`+theurltoload;
  }

  if (fontVariant.includes('regular')) {
    return `${cssLink}&display=swap`+theurltoload;
  }

  if (fontWeight) {
    cssLink += `:wght@${fontWeight}`;
  }

  return `${cssLink}&display=swap`+theurltoload;
}

function getContrastingColor(color) {
  var rgb = color.substring(1,7);
  rgb = hexToRgb(rgb);
  var brightness = Math.round(
    (parseInt(rgb[0]) * 299 +
      parseInt(rgb[1]) * 587 +
      parseInt(rgb[2]) * 114) /
      1000
  );
if(brightness < 50) {
var textColor = '#ffffff';
}
else if(brightness > 137){
var textColor = adjustColorShade(color,-65);
}
else {
var textColor = adjustColorShade(color,80);
}
//  var textColor = brightness > 137 ? darker : lighter;
  return textColor;
}

function randomColor() {
  var color =  impcolors[Math.floor(Math.random() * impcolors.length)];
  var color = '#' + color;
  return color;
}



function adjustColorShade(hexColor, percent) {
  // Convert hex color to RGB
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Convert RGB to HSL
  let hsl = rgbToHsl(r, g, b);

  // Adjust lightness
  hsl[2] += hsl[2] * (percent / 100);
 if(hsl[2] > 1) {hsl[2] = 0.9;}
  // Convert HSL to RGB
  let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

  // Convert RGB to hex
  const darkenedHexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return darkenedHexColor;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + toHex(r) + toHex(g) + toHex(b);
}
function getFontSizeToFit(ctx, text, maxWidth, maxHeight,fontSize = 400) {
if(letterspacing != 0){
  maxWidth = maxWidth*((110-letterspacing)/100);
  }

  do {
  	//log(ctx.fontFamily);
    fontSize-=3;
     //.log(fontSize);
    let m = new TextMeasurer();
    var measurement = m.measureText(text, ctx.fontFamily, `${fontSize}px`);
   // console.log(measurement);
  } while (measurement.textLength > maxWidth || fontSize > maxHeight);
  
  return [fontSize,measurement.bbWidth,measurement.bbHeight];
}
function getFontSizeToFitx(text, fontFace, maxWidth,maxHeight) {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = `1px "${fontFace}"`;
  
    const fztextMetrics = ctx.measureText(text);
    const mstxwid = fztextMetrics.actualBoundingBoxRight + fztextMetrics.actualBoundingBoxLeft
    const msthght = fztextMetrics.actualBoundingBoxAscent + fztextMetrics.actualBoundingBoxDescent;
   
    const newmwd = maxWidth / mstxwid;
    const newmht = maxHeight / msthght;
//    console.log(mstxwid, msthght, newmwd,newmht);

    const returnefsz = Math.min(newmwd,newmht);
    return returnefsz;
}
function applyTypeToCanvas(type, canvas, text, x, y, ctx, textColor, bgColor, linewidth, roundedpx, newminX, newminY, neww, newh, ignoredbg = false) {
  switch (type) {
    case "1":
      settextcolor(ctx, textColor);
      multiplelines(canvas, text, x, y, ctx);
      break;
    case "2":
      ctx.lineWidth = linewidth;

      settextcolor(ctx, textColor);
      ctx.fillRect(newminX, newminY, neww, newh);
        
if (monochrome) {
ctx.save();
ctx.globalCompositeOperation = "destination-out";
settextcolor(ctx, '#000000');
multiplelines(canvas, text, x, y, ctx);
ctx.restore(); 
  }
  else {
        settextcolor(ctx, bgColor);
        multiplelines(canvas, text, x, y, ctx);}
      break;
    case "3":
      ctx.lineWidth = linewidth;
      settextcolor(ctx, textColor);
      ctx.strokeRect(newminX, newminY, neww, newh);
      multiplelines(canvas, text, x, y, ctx);
      break;
    case "4":
      ctx.lineWidth = linewidth;
      settextcolor(ctx, textColor);
      ctx.beginPath();
      ctx.roundRect(newminX, newminY, neww, newh, roundedpx);
      ctx.stroke();
      ctx.closePath();
      
      multiplelines(canvas, text, x, y, ctx);
      break;
    case "5":
      settextcolor(ctx, textColor);
      ctx.beginPath();
      ctx.roundRect(newminX, newminY, neww, newh, roundedpx);
      ctx.stroke();
      ctx.fill();
if (monochrome) {
ctx.save();
ctx.globalCompositeOperation = "destination-out";
settextcolor(ctx, '#000000');
multiplelines(canvas, text, x, y, ctx);
ctx.restore(); 
  }
  else {
        settextcolor(ctx, bgColor);
        multiplelines(canvas, text, x, y, ctx);}
 break;
    case "6":
      ctx.lineWidth = linewidth * 10;
      settextcolor(ctx, textColor);
      ctx.beginPath();
      radius = Math.max(neww, newh);
      radiuspad = radius * 0.2;
      radius = radius + radiuspad;
      radius = radius * 0.5;
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
if (monochrome) {
ctx.save();
ctx.globalCompositeOperation = "destination-out";
settextcolor(ctx, '#000000');
multiplelines(canvas, text, x, y, ctx);
ctx.restore(); 
  }
  else {
        settextcolor(ctx, bgColor);
        multiplelines(canvas, text, x, y, ctx);}
              break;
    case "7":
      ctx.lineWidth = linewidth;
      settextcolor(ctx, textColor);
      ctx.fillStyle = 'transparent';
      ctx.beginPath();
      radius = Math.max(neww, newh);
      radiuspad = radius * 0.2;
      radius = radius + radiuspad;
      radius = radius * 0.5;
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
      settextcolor(ctx, textColor);
      multiplelines(canvas, text, x, y, ctx);
      break;
    case "8":
      ctx.strokeStyle = textColor;
      ctx.lineWidth = 1;
      ctx.fillStyle = textColor;
      ctx.beginPath();
      radius = Math.max(neww, newh);
      radius = radius * 0.5 + 20;
      const a = 2 * Math.PI / 6;
      for (let i = 0; i < 6; i++) {
        ctx.lineTo(canvas.width / 2 + radius * Math.cos(a * i), canvas.height / 2 + radius * Math.sin(a * i));
      }
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
      ctx.fillStyle = bgColor;
      multiplelines(canvas, text, x, y, ctx);
      break;
    case "9":
      ctx.fillStyle = textColor;
      const angle = Math.PI * 0.8; // radians
       radius = 360;
      drawTextAlongArc(ctx, text, canvas.width / 2, canvas.height - 500, radius, angle);
      break;
    default:
      break;
  }
}

function calculatexyValues(minX, maxX, minY, maxY, canvas) {

let the_padding = canvas.width / 100;
let rounded_px = the_padding * 3;
let line_width = the_padding / 2.5;
the_padding = the_padding * 4;
let new_minX = minX - the_padding;
let new_minY = minY - the_padding;
let new_maxX = maxX + the_padding;
let new_maxY = maxY + the_padding;

let new_w = new_maxX - new_minX;
let new_h = new_maxY - new_minY;

return [line_width, rounded_px, new_minX, new_minY, new_w, new_h];

}


const findLineIndexWithMostCharacters = lines => lines.findIndex(line => line.length === Math.max(...lines.map(line => line.length)));


function drawSpacing(gtx,g,h,j){
    let totalWidth = 0;

for (let jp = 0; jp < g.length; jp++) {
      const charWidth = gtx.measureText(g[jp]).width;
      totalWidth += charWidth + (fontSize * (letterspacing / 100));
    }
    totalWidth -= fontSize * (letterspacing / 100); // Remove extra spacing after the last character
     h = h - totalWidth / 2;


gtx.textAlign = 'center';let p=h;for(let i=0;i<g.length;i++){const l=g[i];gtx.fillText(l,p,j);p+=gtx.measureText(l).width+(fontSize*(letterspacing/100));}}


function multiplelines(cn,t,xz,yz,cc){
if(multiple) {
var lines = t.split('  ');
 lines.forEach((line, index) => {
    var lineHeight = fontSize * 1;
    var halfHeight = yz;
    var startY = halfHeight - (lines.length - 1) * lineHeight / 2 + index * lineHeight;
    if(letterspacing != 0){
        drawSpacing(cc,line, xz, startY);
    }
    else {
    cc.fillText(line, xz, startY);

    }
  });

}
else {
    if(letterspacing != 0){
        drawSpacing(cc,t, xz, yz);
    }
    else {
    cc.fillText(t, xz, yz);
    }
   
}

}

const queryString = window.location.search;

// Create a URLSearchParams object with the query string
const params = new URLSearchParams(queryString);
