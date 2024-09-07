'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "b2764f2a7755b1a1f80f3ba513564a47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1a40fe565b40629356c74b118ea66e91",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f2258c383a0dcc62ca826d354fc418a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca87a2e3021073cb45dfd97e2a45d968",
".git/logs/refs/heads/main": "ca87a2e3021073cb45dfd97e2a45d968",
".git/logs/refs/remotes/origin/HEAD": "2209cec8923e293409f41276cf8d69e2",
".git/logs/refs/remotes/origin/main": "77933828e1385da9bfac99020e5795a8",
".git/objects/00/754d0cb4759fbd8e698b0d1aaf932a113432b8": "340976c67a4151097ef0a89fe8c6a8cd",
".git/objects/04/86575504924c40387a83d785e7e3935326a834": "450e8fc75db109c98010362e7af2fe54",
".git/objects/05/b065dc8a0dd2ff60b819626dc6ce4114fb2d25": "bf94fc883334d4b3e86e40bdc251a1f8",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "3408db6561ac84daa2a07ff0a27ca057",
".git/objects/08/41baa21061c113dce3724822697ea97e87caca": "f22962d2849209fc5a01dea5cfc39afd",
".git/objects/08/c1e4d50fc8cd6e0d9174d962370915feb86af0": "27a21dc334a01fd6b7d9f56cd926283a",
".git/objects/09/689bf9bd53023708a74eb850c3812df6eec10a": "ee13b47cc869affa280556f2fdcc8cac",
".git/objects/11/99abf57c00d665fe9defbcce9c58d8f8df9d65": "c095c8fbba57c7f8095abb9381c39837",
".git/objects/12/695438915d7bcdadb4454731bf64299a9ab49f": "0c260d6723479c2564e2f1786e5c566e",
".git/objects/12/cae440d4f6dff313651c72edf290ce997534e9": "2419ecc66504e3c8b8b9eaa122dabfdb",
".git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "524194f0fb5c54751c7ae5482cc5134b",
".git/objects/16/f91b2dad646408f35d76531c0bff3348721a2c": "d49d14643c6f815a0f63ab92421a5ad6",
".git/objects/1a/484dd8861d81f9158af92b0bc4ed7a4ecf72b6": "48ebb728999407e69f42afe0a5facbd2",
".git/objects/1a/e9577b2c7e92845a38e17c79d0b954581574d5": "7cd52f54c4ac7fc4b6ce140ab6879855",
".git/objects/1d/60a7e12875c73e927cd5383dadefb11d8092f2": "283924344201a534359020bf29636ee7",
".git/objects/1f/e1f47a31919e51c5d8d17d2ab3e516fc96c4c6": "e8093c2b1cd2be7424549be743294e1b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "9fa371a1c5b7c62935038b95ef3ddb53",
".git/objects/20/48d2a33393c76245984fad2a5733b039da0ecb": "4fe97c37849f4e57a049d827fb0dbbc5",
".git/objects/26/d4f04b2e7a693c63ffe117af3610e60367d35f": "240aebf22d54f8b863d631a8b46c5708",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
".git/objects/32/ed11e26e6487b55f2655785dd941eb66716727": "089c90fe58e85ae8250b095bcc47f1bb",
".git/objects/33/01b2dfe02b52cc02b83e2ca3facd76ad5c5ff6": "5449137ac5a201bd035cfba6afd5c7a4",
".git/objects/34/4c1922284759bf37d15c23c06185aa38da11ca": "ab5bec07f85b1fcd29fe158d34cbc458",
".git/objects/34/d694bb5e9c06e3cc3e4c94c8a2e449853fe0f9": "9bae107271f5278952cc03fdeb9a3130",
".git/objects/35/f3ddce9302f1649778fde2bba5b5624cf6eef4": "f87144f29b463bf8376fafb2caaf3e07",
".git/objects/36/4dc4af7b7ec549a3a7af97afc115f5553861ca": "3bb60130ab4d1589ce1aeefc3d79a88c",
".git/objects/3b/5cbd6519ff22657f3fe204e00587c7f4705953": "2c566f02a81bea56e69909fd84684b7f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
".git/objects/3c/7d661da30699c82c9c2bf49354afc472156c02": "8b735dcb79b280bd524ec5057d8bee16",
".git/objects/3e/f9fb8ecfb4686763966e795cce1b264de9eea8": "7bd679aef00e94cd78659890b5256169",
".git/objects/40/5dbc750aa893127c9605004242b0bd2a017648": "571733fdf47fb463c5baf4e2b519cac3",
".git/objects/40/f71e902bc4af910be829f12e0d25f58ffe6214": "ed0edd44de5097ffde476b0fa9cd3f52",
".git/objects/42/3e1cc9bef37dde593b6b8ba61c868c3053c0fd": "ca72755baa09bbe6527950c3e5afe986",
".git/objects/43/b1f35cd4f4b6e00238512ed9778196ce4ae83e": "8f146be7073e44ee1aed071edc1f0625",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
".git/objects/48/8647125e3ac62cd6042fa4a2bf69593e4438fe": "5499d9dd62201a3a31df62d6493a6c0c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "cd09e4369341889fd3fc34d8dbc2a61e",
".git/objects/4a/a08d1ac574c0712847e51b9871887e19e3fec6": "68978c338d05c8a6f05f8c93cbf85d02",
".git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
".git/objects/52/25f43becff4ddefc6f0d32445163c6a155f349": "23a0d697058407f40e565b1c7fcbf9a9",
".git/objects/52/cb21d1c2e2408feacac33b59f8736fff7bb5c2": "cc14961425d65bb5663ab27504aaa929",
".git/objects/53/c2794b791faebfba040bb0d12ae9b19e7f1a64": "645d23a5657a1dacec7d99f20078c555",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "e3c516bd9ded0d5972f4e45be0b6f2be",
".git/objects/5f/34bf8f0a94c4866d1c3776ae36acc92ef057c6": "bf919c368d292dc0ed012db94f546b02",
".git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
".git/objects/6b/a10389c80064073063d0dda5f9961c53b27543": "29ec68d1ff408fd19ca033845afb3f2d",
".git/objects/6c/88c108fb08fdcd0aca8b7ddc2fff9b878fe3a9": "1ed1d15d2c3212cc106dc022a9f9b5d5",
".git/objects/6e/38863944f9c7be17b6820a872c47225d08ecf0": "25f1f94d1ee5eedeaa6baa78984af6ec",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "1f07953230fb06b91b96a029dfdcedf9",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "75fabb0279e894d6e8284fcb83093ec6",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "4216b7a7932a8475db6f7eea08b3cc22",
".git/objects/73/f90f2944fd35662a76915ddeea3a4f20efa9ef": "44d5f656c3863c3d2a804d858eb8e505",
".git/objects/74/116095055dbe4f19db343c0766ff21d5f02713": "37ad76015d1aa504a96db6dfc507d200",
".git/objects/78/f36a1e869f29a0979a4ecbe9c85a816e1df6fb": "bf469e3c3818e56278a6e8c52237a8db",
".git/objects/79/ac48336bf7a2d425ff8d17853759bca21dee90": "ddb2270bfb111fbe824f55721e754cae",
".git/objects/7e/5eb93275ba5a94125669e172c7de84bb613db2": "2d07c6b9bd75d2d6f231dc38638ababa",
".git/objects/80/af3bce6bcaf53fb2b284ede50e8757ecc3d1be": "d50ba8b50083bad9afff1ea36ce4afbb",
".git/objects/81/3a3ee0d3e20b6b814f4e57aa754ae7c6e0d9ff": "7b8c7b3de3cc5be700004368a1846a4f",
".git/objects/82/9375e11a856fa88fb642beb183af0934c56772": "dd7ae107542d96dc6e1bda41ca98cd14",
".git/objects/82/fd66b8540849e460a7ab0198df7ae7d5794d5b": "9d19aa4c9b5d5f4eebe1ae3cc6e762c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/1aa43061a336a2405299bac3e9ec796e62f317": "45503306e0723fb83386baae45454623",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/8e/0b72ee68f574fe59de3d7eaa156a2994164878": "4dbf7914d5b8ba40ede3332b302c3e6f",
".git/objects/94/231fa69a4e49b72679c1240b4d5a8b9644212e": "46edc93ed88d39bb13233dfbfdf9d4d3",
".git/objects/94/65d16ee3762eafbd1dbb5df7c2c447a0a49436": "0b7c8d478b62efef4fb51617ac068fd2",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "6448e47fe7916870b05cec66163f80e8",
".git/objects/96/8887559aa4ae6b7a2d63b42f7edb8f71210f21": "4a5de26a1aae3f52b384e3463f81b6dd",
".git/objects/99/638bae43cd81a96797edac402749ca7b83a837": "33a100e26c53495072c769e39f528902",
".git/objects/9b/3267e0fddfc8d63683053cf8a6000bc9feacbe": "e52531740ead7668e41d927882cc53bb",
".git/objects/9b/7267d6a93e84bba4d1cf07283365a012161f59": "416d38d2dd59f483a41d542642d7d7bd",
".git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
".git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
".git/objects/a4/236f81e80b3462c81486213723c624138386a7": "39c9a48112bf3bbcca932f498a0057cf",
".git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
".git/objects/a6/fd7b49378d41f5d2905bb3e7dfcac363b794bd": "317549023d1e7adf7e94488e24c3b095",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
".git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
".git/objects/ac/6474fd6b4be1b90cecae1d436ea065a64a7f19": "477b473f5916e2922daeb24023f2abd7",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "9b40e743beff9e546cc99dec7511e63e",
".git/objects/b1/f874718f09471fcb8a2deb8b7e88b15ebc7525": "cef0e216f391abbf9868d3ed83b6c58b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "562b4691dbb70c6ac4c6280aa875e0ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/c3/1f68e0065c413bba806136994e07920eea4f59": "3bdba65aa9083768c005c7e5d67a8867",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "6b778e1b2cbd2f0151ad9611b262c77d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
".git/objects/c9/de24860f6d1dc21138c2c6a9bc2abd13b05bd5": "31c3d6204cfa7145cf1a0021f264b750",
".git/objects/cb/579ea8a8518070e0d3e5944e3e4f907a930c9d": "de40670b76a10bc64cb829616f6172db",
".git/objects/cc/02ce89f7df8d336b50e5406e93f595d3656e18": "bf9cac7e51bbc0aaf2faf9f1a44a3ffe",
".git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "e328ba153ad3c7d383daf129966de954",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d4/3ea6bc8ace9d49ea89b0d57c475df7cd7780be": "eb1f8bb9359c90819070d3e71edcc89b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/db/acaed6dd280f78dbb5e97af9f6e87670081f69": "0b94e2aa1ef3ec63b28352e6a16f8fa7",
".git/objects/dc/51c435e0b4ee71c4b0fe1ed4bc8ee7e1d2dab6": "353ce5ff3cb5f41479d355965a908f17",
".git/objects/dd/5ea3f5205f0b98b23e97933f2b9c0fc9c665d9": "0e5476e5259f6c81a028fdef7284c0b8",
".git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "8819d39d02ab48574c6a82770a54e602",
".git/objects/e8/b3a9076c4c112ae83ab7fe7ba22e2d9cee8e87": "27d4614f9fbfca8db8de30a696dafd5f",
".git/objects/e9/5077d30b8a89c7dab59690d65ecb162a1f27a0": "a532f8b8dfe62dbec6f80e63d8841f2d",
".git/objects/e9/acd21e2099b16f2586ec0221bfa5679b5a3903": "8e4a789201a153a8e7464317990c6d88",
".git/objects/ea/b983fc1483e8330f10acb29fd765ab86149a9a": "bccffed0f39ee377cd78ba6007680b4e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/eb/b81bea01c522ee073aa13c2eb27ed004cf25ad": "257831df7a37114ba36b72be58a35efd",
".git/objects/f0/353e622247c721a218565cc100ce9783faab91": "eb568d39331e9dc11a0ca10fb6366a2e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f2/a84f260665446a7e3cfadcc4f1664827f6f86a": "e5d7cbc55227d0ec236872bece3fdd84",
".git/objects/f5/28d86ea57555750ad996b76da42f20c51879e4": "74b679a232e5cf7cc2ba4eb043650d7f",
".git/objects/f7/59f7e85f2eac884974bd14e213b160e442b066": "4cf394ac4191c59618544ca34b93b809",
".git/objects/fc/82a69d816fe01668ea1c274e9630788771ca92": "18091677e3594bbba6b0f5ba344c608e",
".git/refs/heads/main": "8fad252b83fa81eeb3b9ab0120af7f61",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8fad252b83fa81eeb3b9ab0120af7f61",
"assets/AssetManifest.bin": "6d3a63a124e4c7078d2739bedc7ca8dc",
"assets/AssetManifest.bin.json": "1b7df73b920b993526cc07f1301e5273",
"assets/AssetManifest.json": "e3973c164591a816814d72258c172c6b",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/images/logo.png": "5f845cbce16ab386d0e4d1b302dacddc",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "809a12f864920ec2a060a5a0a5cd0da6",
"assets/NOTICES": "9ae2c32c711fd8dc47c69bf39a19e3ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6df33a1f82f2ee4c82501faabcb4962a",
"/": "6df33a1f82f2ee4c82501faabcb4962a",
"logo.png": "5f845cbce16ab386d0e4d1b302dacddc",
"main.dart.js": "5cfdab099ec870af226b90ee0dda5192",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
