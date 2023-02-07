console.log('service-worker.js')

// advanced config for injectManifest approach
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js',
)

// Detailed logging is very useful during development
workbox.setConfig({
  debug: false,
})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// workbox.googleAnalytics.initialize();
workbox.routing.registerRoute(
  // Match all navigation requests, except those for URLs whose
  // path starts with '/admin/'
  ({request, url}) => request.mode === 'navigate' &&
                      !url.pathname.startsWith('/LiveEditor/'),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(/\/$/, new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(/\/*/, new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(/.+\/*/, new workbox.strategies.NetworkFirst())

workbox.routing.registerRoute(
  /https:\/\/code\.responsivevoice\.org/,
  new workbox.strategies.StaleWhileRevalidate(),
)

workbox.precaching.precacheAndRoute([{"revision":"77fd907c20a1295b37ce60bc0eba7aed","url":"Browser.45df2760.js"},{"revision":"69fb265115432b276bbcb0dab253171f","url":"Browser.63668b87.js"},{"revision":"5378d81b4e7d9f3c0c1b984b2e5cd9d5","url":"editor/ace.js"},{"revision":"4be83f1d7e80775a3f3105f705dfe39b","url":"editor/ext-beautify.js"},{"revision":"f96be8c7206f9f0c35f1024e2f90bc77","url":"editor/ext-code_lens.js"},{"revision":"5191f0a2e50009f1a58dbaaf8c7eed03","url":"editor/ext-elastic_tabstops_lite.js"},{"revision":"7990ab68e0d5f00be1417d499ac50b78","url":"editor/ext-emmet.js"},{"revision":"bff25dbf657a07d2df49accf1a604843","url":"editor/ext-error_marker.js"},{"revision":"81d8efc9d9057913d03c8ed9faf4c3d4","url":"editor/ext-hardwrap.js"},{"revision":"418689903db16b94f5919c5582db9b14","url":"editor/ext-keybinding_menu.js"},{"revision":"04d46a30f848404540fad102eda5dcac","url":"editor/ext-language_tools.js"},{"revision":"5d4dfb04b610b3991e9fcfdb6a4f0f4b","url":"editor/ext-linking.js"},{"revision":"0bbaf0142f08b00558ab6f5ece3721ca","url":"editor/ext-modelist.js"},{"revision":"9250bd1a03f292661277581554abcc85","url":"editor/ext-options.js"},{"revision":"1a51a18703d2f6eeb8c24e43f7fcfd2d","url":"editor/ext-prompt.js"},{"revision":"9e2362dfea9ea452b229f98e5955fce8","url":"editor/ext-rtl.js"},{"revision":"1cabd28e9c7c57b2ef7532afb3ec8708","url":"editor/ext-searchbox.js"},{"revision":"54c04750e74ee7c3055acea206b909bd","url":"editor/ext-settings_menu.js"},{"revision":"d06418ea6ef96f11a0b4f4f8e8457eb1","url":"editor/ext-spellcheck.js"},{"revision":"d9a200d4315c9a1619a12797a1eebb4d","url":"editor/ext-split.js"},{"revision":"d1121b5ff09d614e3e9623c682b19385","url":"editor/ext-static_highlight.js"},{"revision":"dae83b0db0db201784db10174a2c0fa0","url":"editor/ext-statusbar.js"},{"revision":"b7eaf75b06745cb97de8f21fee997f5b","url":"editor/ext-textarea.js"},{"revision":"f27ee02d7ce259faa7797d8fa934c95e","url":"editor/ext-themelist.js"},{"revision":"a69009c59ec6f8498daae63971bd7814","url":"editor/ext-whitespace.js"},{"revision":"0f289c7132077958b44da195142ffcdd","url":"editor/keybinding-emacs.js"},{"revision":"8d3d61ca57c26ffe219758416a90c332","url":"editor/keybinding-sublime.js"},{"revision":"18f6d3dc604e8174791aec63e5a29bb6","url":"editor/keybinding-vim.js"},{"revision":"d2cb2a1e7d0eedcf406b636fbf6e7d49","url":"editor/keybinding-vscode.js"},{"revision":"9565ba96fc7434d4ebe12064592cf416","url":"editor/mode-abap.js"},{"revision":"eeaad6279985fc1076c1b066e7b313ab","url":"editor/mode-abc.js"},{"revision":"0405a5464c2c732ac96670ba1b7fd8ff","url":"editor/mode-actionscript.js"},{"revision":"fd7581d205a86f49908eda19424983f9","url":"editor/mode-ada.js"},{"revision":"36506050262b63143e227c8f0d2917db","url":"editor/mode-alda.js"},{"revision":"101447858061e58943416475a64afc33","url":"editor/mode-apache_conf.js"},{"revision":"ee742017ec781b6913821d4bd600db28","url":"editor/mode-apex.js"},{"revision":"08a8cce831a81e31f9089196656a1bf2","url":"editor/mode-applescript.js"},{"revision":"daa6bbbe1029c471a071c4560163af99","url":"editor/mode-aql.js"},{"revision":"8373f2944e9da5dda7661fba6a7f0dc5","url":"editor/mode-asciidoc.js"},{"revision":"51e0b04892baa102eff5e470b918769c","url":"editor/mode-asl.js"},{"revision":"1a784aeea47abf27999d46e4489f973f","url":"editor/mode-assembly_x86.js"},{"revision":"902febbf3a9a4045673eec5d0c0e8891","url":"editor/mode-autohotkey.js"},{"revision":"c7d3041669874ef8ad71f336ae87e32a","url":"editor/mode-batchfile.js"},{"revision":"013bbf8971bbf99b345e0d6fe523ed57","url":"editor/mode-bibtex.js"},{"revision":"9d54ba6faae5a91539b0454e303cc9ba","url":"editor/mode-c_cpp.js"},{"revision":"d9e505c7cbb934f632a1da3dd274d7fc","url":"editor/mode-c9search.js"},{"revision":"f1652c3e7ea4e0fbf49af070421e8ad6","url":"editor/mode-cirru.js"},{"revision":"58215a333255b67dd31e2880b094251e","url":"editor/mode-clojure.js"},{"revision":"0411d98c44936e186ddf191991425e79","url":"editor/mode-cobol.js"},{"revision":"1972ee3a1d76ed24aa02ea61b6d51a15","url":"editor/mode-coffee.js"},{"revision":"7f0ac9a2fc9dc03bc060670051dee222","url":"editor/mode-coldfusion.js"},{"revision":"0156a7c3c544b84214bf80e6d1bd1650","url":"editor/mode-crystal.js"},{"revision":"24ae8b605e0957c023f2c545b0b0c423","url":"editor/mode-csharp.js"},{"revision":"fc6da3d87513d1780bc604433fcbfa31","url":"editor/mode-csound_document.js"},{"revision":"dc0102da18569dff5dddde10087d7019","url":"editor/mode-csound_orchestra.js"},{"revision":"42d49ff849c55ac60900222de04d77b7","url":"editor/mode-csound_score.js"},{"revision":"9d71b9820d289193eaff5eaf27fef7f2","url":"editor/mode-csp.js"},{"revision":"b2dfd0b1ddb2dc185a3724eaf3245598","url":"editor/mode-css.js"},{"revision":"cd8723b55dd9be53ecf48d2ec797c229","url":"editor/mode-curly.js"},{"revision":"605b33fa1fad35f913cf5ee4ed083a2e","url":"editor/mode-d.js"},{"revision":"0a893f1066c3cd6fd261ab6349dd4674","url":"editor/mode-dart.js"},{"revision":"c3a745d0b3274c787a5b9ac225aeadc0","url":"editor/mode-diff.js"},{"revision":"144385a05507da2fd2ed1af575019f31","url":"editor/mode-django.js"},{"revision":"55d175a63235ad785ee82417a99db705","url":"editor/mode-dockerfile.js"},{"revision":"cc0519b6f6308f2f9cf062fdb0cd018c","url":"editor/mode-dot.js"},{"revision":"68d33c2d72231e92e31d69ac9b831858","url":"editor/mode-drools.js"},{"revision":"a728972178956c784592f291cf5e6c32","url":"editor/mode-edifact.js"},{"revision":"581af32744c82553383a97bd0dcd1912","url":"editor/mode-eiffel.js"},{"revision":"78b608ca4639c472a212727600a6a4e0","url":"editor/mode-ejs.js"},{"revision":"bb736bb16827a36442a0f5efefc8d9f9","url":"editor/mode-elixir.js"},{"revision":"af24c9cedc7295cdfe53f1cc4ec44c93","url":"editor/mode-elm.js"},{"revision":"2d678814e872ac51e1a7842090283543","url":"editor/mode-erlang.js"},{"revision":"01da0b465eafcfc2810bd896463ac177","url":"editor/mode-forth.js"},{"revision":"d21aca4e2e8c71fc99f2927318f1c8fc","url":"editor/mode-fortran.js"},{"revision":"1ec5a8936d691fa969b2f740708bdaa0","url":"editor/mode-fsharp.js"},{"revision":"5ba2b3bcc56ce04517a3e96124277eb2","url":"editor/mode-fsl.js"},{"revision":"4dc49d8d70da53f303418ea9e5a86f27","url":"editor/mode-ftl.js"},{"revision":"475a05d86b21251ff0f04001e3faa145","url":"editor/mode-gcode.js"},{"revision":"44017c99d2b42aafad5fbe5761cf5295","url":"editor/mode-gherkin.js"},{"revision":"766f1a752d39d4a4d78023b167d00c69","url":"editor/mode-gitignore.js"},{"revision":"c7dc2c244bcfc6a9da43612a930e3b0e","url":"editor/mode-glsl.js"},{"revision":"635c3f0f17bff23f783bd70713a7fdb8","url":"editor/mode-gobstones.js"},{"revision":"7f3c242d61bed2fb99e7cf150ea50fb3","url":"editor/mode-golang.js"},{"revision":"e37df7bbb738ae30fa0238f78cfc1b0e","url":"editor/mode-graphqlschema.js"},{"revision":"f13a3a7584ad0ffebd1f070d8451b5c3","url":"editor/mode-groovy.js"},{"revision":"9914ce1a2737c3184b4766753bfa82a3","url":"editor/mode-haml.js"},{"revision":"e900a5a4b6597da3a1ac38409224988b","url":"editor/mode-handlebars.js"},{"revision":"ac9180844f3e81f574b9129c7d3de15b","url":"editor/mode-haskell_cabal.js"},{"revision":"6feee712c423da0922209ece9da1e3d0","url":"editor/mode-haskell.js"},{"revision":"6005b9535dde621b9ec698e8d32c498a","url":"editor/mode-haxe.js"},{"revision":"8a27e45ff6269fded458c7b6b6037fe1","url":"editor/mode-hjson.js"},{"revision":"86fcdafe83e3ab2155ebc94c932e4dc1","url":"editor/mode-html_elixir.js"},{"revision":"81b8a12ce0a3e25a8c9e281db9603cd0","url":"editor/mode-html_ruby.js"},{"revision":"9f3b79e5ec185458e4dacbe63c9f3259","url":"editor/mode-html.js"},{"revision":"c2f15e1dcea856b54c8a3aa929cb033f","url":"editor/mode-ini.js"},{"revision":"5ec110176954ebf4c0d40283370a853d","url":"editor/mode-io.js"},{"revision":"c8ede70374baacd55161045792fd012c","url":"editor/mode-ion.js"},{"revision":"bd12ee72dc7fd96382f0ee3fd0c9660c","url":"editor/mode-jack.js"},{"revision":"2efeda0ab2a62d0bdc99d6853fbd7d49","url":"editor/mode-jade.js"},{"revision":"bbf556b25e02b433039cbcb203678b4c","url":"editor/mode-java.js"},{"revision":"6901aec5fca4ec953fc5c596d7cddadd","url":"editor/mode-javascript.js"},{"revision":"ad1bf8ccc91c4f454adef2e7ef4d5ee3","url":"editor/mode-jexl.js"},{"revision":"611d6f53308d4cefa9fd22342c1b3a66","url":"editor/mode-json.js"},{"revision":"71b9d8352543a79aa2df049c7bd73450","url":"editor/mode-json5.js"},{"revision":"d96726cf599d8e58cce14a479d4fbb7f","url":"editor/mode-jsoniq.js"},{"revision":"897a12de5e05b76f0a65f21a3109bd05","url":"editor/mode-jsp.js"},{"revision":"3d85c1dddb6f352187fb79292f4d34a2","url":"editor/mode-jssm.js"},{"revision":"39eba2d3af7a1bfb9286075310593906","url":"editor/mode-jsx.js"},{"revision":"a31d257cf729e268a4c44697a8e4a99f","url":"editor/mode-julia.js"},{"revision":"f1f259208795ccea670117f1d14cbfd9","url":"editor/mode-kotlin.js"},{"revision":"2784efaf1f85d5b5e1af7855eb9d96b0","url":"editor/mode-latex.js"},{"revision":"f9009eebb25c40b0bd86f919a72f4e9a","url":"editor/mode-latte.js"},{"revision":"3a45f4a9fc27082962018ac10fdc656e","url":"editor/mode-less.js"},{"revision":"d4d51b575d21e56916202ba61bfe0c38","url":"editor/mode-liquid.js"},{"revision":"8f1bf08aac055ed6ba204d20447a35d4","url":"editor/mode-lisp.js"},{"revision":"5eee9192b874911f584a0dbb055cb641","url":"editor/mode-livescript.js"},{"revision":"db801ca5d9c52aedb26ef7286a7d1dd7","url":"editor/mode-logiql.js"},{"revision":"37a56e440633b17598e87470c2c75cf6","url":"editor/mode-logtalk.js"},{"revision":"0cd0af5bfe4f4b453db2fc0803b91e06","url":"editor/mode-lsl.js"},{"revision":"03d25f56ec8c4e44556bdac035badd35","url":"editor/mode-lua.js"},{"revision":"cd884124c45fef5cd9ab7f7cfa382b4d","url":"editor/mode-luapage.js"},{"revision":"b1e5ef6ea4bf04c6003f49acf3464202","url":"editor/mode-lucene.js"},{"revision":"e1006d4c518310f6ff4dbcffbc21b248","url":"editor/mode-makefile.js"},{"revision":"581fe4b6971b10a3a8a7e8851ccfd564","url":"editor/mode-markdown.js"},{"revision":"1a58aa950f146830147d86e78230ff4c","url":"editor/mode-mask.js"},{"revision":"56a36d379a0969374b751b74d1fe5436","url":"editor/mode-matlab.js"},{"revision":"db50739ade97d6547297fd042234da43","url":"editor/mode-maze.js"},{"revision":"6fe2398819a44f5b61bb9fd78f39109b","url":"editor/mode-mediawiki.js"},{"revision":"fb932c89faba8f12e8f7f765df1a5637","url":"editor/mode-mel.js"},{"revision":"d46990e88d351b1b3904e0ea6b80cd22","url":"editor/mode-mips.js"},{"revision":"81a0099e387626ce66c015a7e5d6d838","url":"editor/mode-mixal.js"},{"revision":"6fda934fe38a53b6ea7dae4de058f6c7","url":"editor/mode-mushcode.js"},{"revision":"bd5da5efd82f688648b28f49db8b3a3e","url":"editor/mode-mysql.js"},{"revision":"f0f221b78f476413e2ba2f2063181442","url":"editor/mode-nginx.js"},{"revision":"72b8cffc1f484dc9d669966fcc7cd9eb","url":"editor/mode-nim.js"},{"revision":"82e84accfafb7a2dc826efe856777fce","url":"editor/mode-nix.js"},{"revision":"f296f97851997e7611af45febc1c6ac3","url":"editor/mode-nsis.js"},{"revision":"49d6159af0aaed5d866bffd0621418f0","url":"editor/mode-nunjucks.js"},{"revision":"d06a6034641a14614ac572dfbc844d47","url":"editor/mode-objectivec.js"},{"revision":"fc7a312c2a946e839cf2ce677d09a1ef","url":"editor/mode-ocaml.js"},{"revision":"20fcf2537716a3efe30f33645adf7594","url":"editor/mode-partiql.js"},{"revision":"2e40620cbf4af7ca511d41c757bad623","url":"editor/mode-pascal.js"},{"revision":"9b78b9c39e1a262f47694aa84928f661","url":"editor/mode-perl.js"},{"revision":"2d1162649b8909932f44e9fff7ba85be","url":"editor/mode-pgsql.js"},{"revision":"30709c8de882f282a4e52ef649e1e288","url":"editor/mode-php_laravel_blade.js"},{"revision":"e309a7ee0f59efe0f5dff9c2139b3610","url":"editor/mode-php.js"},{"revision":"4ca254d512f5b455cdefaeac101ad14c","url":"editor/mode-pig.js"},{"revision":"d86cc6d49f658806bd73214df8d339b3","url":"editor/mode-plain_text.js"},{"revision":"9ac5ae21caea53f57a08ce24930a120d","url":"editor/mode-powershell.js"},{"revision":"d4e2b8a6ee00034624ef1db4a6408ca3","url":"editor/mode-praat.js"},{"revision":"e5729d0ec6871131901aa721e1a70caa","url":"editor/mode-prisma.js"},{"revision":"0e17412a3d3f4ed30e6b6a6ebad94fd8","url":"editor/mode-prolog.js"},{"revision":"cf7b9d5e5b7a6f969008ed447483131f","url":"editor/mode-properties.js"},{"revision":"cc696f5bfff99288d8d35258e0a28a41","url":"editor/mode-protobuf.js"},{"revision":"14c4be19c3e5ecf26fb45e7aaa547fd1","url":"editor/mode-puppet.js"},{"revision":"e66d7954a9e462be835d456222de728c","url":"editor/mode-python.js"},{"revision":"179e7e79324ca47972818b275a6032b6","url":"editor/mode-qml.js"},{"revision":"6d589d6ffc67ae803314f282e82c8cfa","url":"editor/mode-r.js"},{"revision":"2a6f91c81ccb87d2a31e7b95a15edc2e","url":"editor/mode-raku.js"},{"revision":"c4e2719d70e44189a2e6b52821849b7d","url":"editor/mode-razor.js"},{"revision":"27f83fdf6fe84064c899b40e95420f33","url":"editor/mode-rdoc.js"},{"revision":"88e11dc990f70c3592230605a9f99947","url":"editor/mode-red.js"},{"revision":"11857fd26b67d01537a277e602f74b0f","url":"editor/mode-redshift.js"},{"revision":"b684be313270003965346cabcb3cb9ca","url":"editor/mode-rhtml.js"},{"revision":"008b26b3cc2385e47ac99d05a5b3ec9c","url":"editor/mode-robot.js"},{"revision":"42602b6eecd2c2bd67e29eab9972acac","url":"editor/mode-rst.js"},{"revision":"77244aaa97058d3577b0c8502ed55434","url":"editor/mode-ruby.js"},{"revision":"ddfe42cf843e1ad2433e7119e07b317f","url":"editor/mode-rust.js"},{"revision":"048cac67cdac82c56711ee2e9261bd75","url":"editor/mode-sac.js"},{"revision":"f0deeab28c85830f1221bf0f3bae57dd","url":"editor/mode-sass.js"},{"revision":"98c5e7b8898c2a4726f3288117ffe83c","url":"editor/mode-scad.js"},{"revision":"eb18a18c10c87837f57e8f55070e2a15","url":"editor/mode-scala.js"},{"revision":"14f102a63e9d6f0187e8e822099d2f16","url":"editor/mode-scheme.js"},{"revision":"798248eb0c68cf699d3716374689062e","url":"editor/mode-scrypt.js"},{"revision":"08b0d9111cbba2edb2e66ed676a173a6","url":"editor/mode-scss.js"},{"revision":"b8f3c0734e7d90837e86043194c114ec","url":"editor/mode-sh.js"},{"revision":"22a4ed07ed028a4723629a9a7d8fa420","url":"editor/mode-sjs.js"},{"revision":"93e376943f6aed6b57e3b2fc35548714","url":"editor/mode-slim.js"},{"revision":"df834c62b509c65bd830bbe6c1b2cc57","url":"editor/mode-smarty.js"},{"revision":"8abdc168ae3f227598cf03a94ae57f81","url":"editor/mode-smithy.js"},{"revision":"2e9b6598d5f7a1a29fff7988cc6c9db6","url":"editor/mode-snippets.js"},{"revision":"3d44d84554121ad66ec46e4b0276dc2c","url":"editor/mode-soy_template.js"},{"revision":"77f41123a22ca9050b969d03361a0a20","url":"editor/mode-space.js"},{"revision":"0f620f3654a624b5800e6e3503b04097","url":"editor/mode-sparql.js"},{"revision":"b9f535b74a8e902ee0c94cbdcd75542a","url":"editor/mode-sql.js"},{"revision":"b0e6a5da56d765519af343223b9bf454","url":"editor/mode-sqlserver.js"},{"revision":"93bbe2475033089d44445d151f1feb03","url":"editor/mode-stylus.js"},{"revision":"ae3958caf348f1eec433d167112daeb4","url":"editor/mode-svg.js"},{"revision":"e6cc8525622aaf090d6121dc497aee90","url":"editor/mode-swift.js"},{"revision":"1aab970e9dbbb46f6d6eab497f1ec642","url":"editor/mode-tcl.js"},{"revision":"3a08638d147b0efaffe533681930ec55","url":"editor/mode-terraform.js"},{"revision":"736b65273e5807185c977a36fcbfdaab","url":"editor/mode-tex.js"},{"revision":"c01becee0a5e9e847c9dd4a789761925","url":"editor/mode-text.js"},{"revision":"1a292f5feba46cc88ce7ac79b4da3e59","url":"editor/mode-textile.js"},{"revision":"d25fc7cb10200a29f0e4d645360f3a44","url":"editor/mode-toml.js"},{"revision":"f440ba7ce1f2251dcd3c0d767a5e3bed","url":"editor/mode-tsx.js"},{"revision":"73378d8e8d20b30b3f77cb48b5aea0cf","url":"editor/mode-turtle.js"},{"revision":"15a86c1c5f951f77786922bdc1396247","url":"editor/mode-twig.js"},{"revision":"e13148329823387f349c1bfe80ffafe0","url":"editor/mode-typescript.js"},{"revision":"9a4c1cbfa4503a422bceca6a10a597d2","url":"editor/mode-vala.js"},{"revision":"0ca52c5bb03a3fddd9c59ef1964a87d1","url":"editor/mode-vbscript.js"},{"revision":"0d62640b1792452d99e7ab6d1f19f4de","url":"editor/mode-velocity.js"},{"revision":"fe9d60a1e5293366caed70b23a66abb4","url":"editor/mode-verilog.js"},{"revision":"a8b9483ae93a9b32d6b4efa0584f0b44","url":"editor/mode-vhdl.js"},{"revision":"fbb74dd183cb466094ac651b55efa913","url":"editor/mode-visualforce.js"},{"revision":"c9cb3f2c9e4b03e3f911ca3f6c005209","url":"editor/mode-wollok.js"},{"revision":"d84c2b1a0ff015d40a47000a40d1786a","url":"editor/mode-xml.js"},{"revision":"ae26980a82cf9409f889eaa4a90a82de","url":"editor/mode-xquery.js"},{"revision":"bd201ecb304a652c39f7c7de03cba89d","url":"editor/mode-yaml.js"},{"revision":"67b8e3c0fccdbfa638aeafe4b1675d0e","url":"editor/mode-zeek.js"},{"revision":"c86ff36573bab9aa77f3d74211ac40ec","url":"editor/snippets/abap.js"},{"revision":"0b0cbcf0bebe935f60ba018474962ed1","url":"editor/snippets/abc.js"},{"revision":"71ddb43d2257d8545d06d46b0200e922","url":"editor/snippets/actionscript.js"},{"revision":"1db60511f0097168a32987c3e0388c05","url":"editor/snippets/ada.js"},{"revision":"650d86a4078bf6639701ffcb91238572","url":"editor/snippets/alda.js"},{"revision":"fa31b280de62069e898a96a4b8dd0f36","url":"editor/snippets/apache_conf.js"},{"revision":"c8aa86d6847e0a6a947a153eef10e546","url":"editor/snippets/apex.js"},{"revision":"07e7416631015b5a4e3d8134699f0008","url":"editor/snippets/applescript.js"},{"revision":"5100d398d4560cc2a24423e921adf9fe","url":"editor/snippets/aql.js"},{"revision":"0d7ad78da27f2f89135ef32ca4aa8907","url":"editor/snippets/asciidoc.js"},{"revision":"3199aa409707625dbf2fed0655dc0617","url":"editor/snippets/asl.js"},{"revision":"e4a225be9d40eae30a07d3b3789ce48e","url":"editor/snippets/assembly_x86.js"},{"revision":"5a5b25931c827093f6515df62eb8e5d1","url":"editor/snippets/autohotkey.js"},{"revision":"afd3daa6975f10b14e8bead215d41213","url":"editor/snippets/batchfile.js"},{"revision":"f269becc89615dd84fda291d3f3222a9","url":"editor/snippets/bibtex.js"},{"revision":"ca75dba4c2e21090112e2523ddc4e10c","url":"editor/snippets/c_cpp.js"},{"revision":"576573e49215e9932fdd93e47b05a90c","url":"editor/snippets/c9search.js"},{"revision":"a7dc7222b496d27a2eb497733cf4649d","url":"editor/snippets/cirru.js"},{"revision":"9a604a4883745c753eb497e877a2052b","url":"editor/snippets/clojure.js"},{"revision":"947e929fb7d2111b394736e5b35da083","url":"editor/snippets/cobol.js"},{"revision":"a6d04ed781acd35fe6424dd4adf1a590","url":"editor/snippets/coffee.js"},{"revision":"8e1518914dd63f5225315ce4ee3958bd","url":"editor/snippets/coldfusion.js"},{"revision":"fa072fc547accefb9bcc379c6b75230a","url":"editor/snippets/crystal.js"},{"revision":"e0a1b63f8c3889afbdcbc623a55c1e7e","url":"editor/snippets/csharp.js"},{"revision":"569d5987c57187b460a8291aa12ff96c","url":"editor/snippets/csound_document.js"},{"revision":"e8ae37bd39c33a6c57c2110fa301f2d8","url":"editor/snippets/csound_orchestra.js"},{"revision":"2e839b54598f5ad32d8e149dd19bff3c","url":"editor/snippets/csound_score.js"},{"revision":"2de1bc5481136bbeda694c4fe2a15da5","url":"editor/snippets/csp.js"},{"revision":"a5e1969606a2cb6b1ab4dba182073c4e","url":"editor/snippets/css.js"},{"revision":"14ec0a80eba8a60dcf75fad0971bf789","url":"editor/snippets/curly.js"},{"revision":"2b6b12cfabef9a2857b52f1f6e0be478","url":"editor/snippets/d.js"},{"revision":"45ef1b2198f5b18159a392debebc4c38","url":"editor/snippets/dart.js"},{"revision":"ac4622a61f99a0142356b48176f0e33b","url":"editor/snippets/diff.js"},{"revision":"e0a7eb5481bd0f7eedf2f25835d60060","url":"editor/snippets/django.js"},{"revision":"d5902de8f09fa5d0e42ad69137f45a00","url":"editor/snippets/dockerfile.js"},{"revision":"f771826d76e2f0671fd982afe325fa3b","url":"editor/snippets/dot.js"},{"revision":"74c877d7d02ccf671b2e1312f327d97e","url":"editor/snippets/drools.js"},{"revision":"72f8c17583cf0a539f7ebc912a6ae242","url":"editor/snippets/edifact.js"},{"revision":"bf2b95326a6f2560c446f370de05b4c9","url":"editor/snippets/eiffel.js"},{"revision":"81b4f5ed64b43b36ffb6eb9ed6901900","url":"editor/snippets/ejs.js"},{"revision":"dadd31fe1c900a7efb76d4c7a8e76497","url":"editor/snippets/elixir.js"},{"revision":"dcaea2a1d6f8ac4484067930debf0861","url":"editor/snippets/elm.js"},{"revision":"630de008f225bc101d3c634a88d74087","url":"editor/snippets/erlang.js"},{"revision":"89150eb3939d04260e38e099b711837d","url":"editor/snippets/forth.js"},{"revision":"c2fa5dd283b1fe3e2bee8e98130be203","url":"editor/snippets/fortran.js"},{"revision":"d50d67e6eed5af86d6e50f912a68d9ad","url":"editor/snippets/fsharp.js"},{"revision":"34a2c7aaa7fdcbc29c7f4d486dc02328","url":"editor/snippets/fsl.js"},{"revision":"27bf8811ab5e36a7141c2d91f2990bd4","url":"editor/snippets/ftl.js"},{"revision":"3c097604f061da66bc24fde14d46f467","url":"editor/snippets/gcode.js"},{"revision":"e08fa30a43b649402084dcd0dd22e6f2","url":"editor/snippets/gherkin.js"},{"revision":"e1b246d55671257668e5d70439807cc3","url":"editor/snippets/gitignore.js"},{"revision":"c15d5891da2a4af88ccebc841e472b1b","url":"editor/snippets/glsl.js"},{"revision":"a6cd02460384ce1da9c2cafa9d1ead4f","url":"editor/snippets/gobstones.js"},{"revision":"e97632882796d0d2d7317de9f74a1222","url":"editor/snippets/golang.js"},{"revision":"17911aa29fc54748a757c797c417daab","url":"editor/snippets/graphqlschema.js"},{"revision":"a3c524bc50c4f2ed9db28cc0c0c9e1ac","url":"editor/snippets/groovy.js"},{"revision":"079097bbcc022b2b1bbc20c2066349ab","url":"editor/snippets/haml.js"},{"revision":"f46cc593fa8a584f0bce19fe29d544d4","url":"editor/snippets/handlebars.js"},{"revision":"37f21fd9fd82a9bfbf8dfdcdac693151","url":"editor/snippets/haskell_cabal.js"},{"revision":"30132a6621a169a832caaa15ac432a52","url":"editor/snippets/haskell.js"},{"revision":"ae6acf47c7bf840a0c4280b7d53ce08d","url":"editor/snippets/haxe.js"},{"revision":"2d657f249d0e2ebf16ccd9c57b85e7eb","url":"editor/snippets/hjson.js"},{"revision":"f1acf791bcf2956ec57d1dee86209062","url":"editor/snippets/html_elixir.js"},{"revision":"0f995ca166568d91e5c57a8fe2fa1d34","url":"editor/snippets/html_ruby.js"},{"revision":"2e72d38edca1d98b401deedc765cab95","url":"editor/snippets/html.js"},{"revision":"5bda33b2f02530d3335ad88e5ad330ff","url":"editor/snippets/ini.js"},{"revision":"fdc127154b469b1f717d08a6d1f725f4","url":"editor/snippets/io.js"},{"revision":"be818fec4b426b8ada456359b391b5cf","url":"editor/snippets/ion.js"},{"revision":"87e25507f559863959770fcd0968c3c6","url":"editor/snippets/jack.js"},{"revision":"348c2e77c48dd7d725f43b309e98c5eb","url":"editor/snippets/jade.js"},{"revision":"604f5f4b1e1fb24104a8bee80323c3a8","url":"editor/snippets/java.js"},{"revision":"6b227f53dab6b78bf26e818b93e1e7f2","url":"editor/snippets/javascript.js"},{"revision":"b798fcc2a394887fdd15ba3f8976407e","url":"editor/snippets/jexl.js"},{"revision":"f89c4472821a242e9895d5eaacdb6c6b","url":"editor/snippets/json.js"},{"revision":"81349bf4810d173ae9bd8790b7dd7e2a","url":"editor/snippets/json5.js"},{"revision":"2d13243c3065f038d4335b6be20914be","url":"editor/snippets/jsoniq.js"},{"revision":"8903144acbbc43c0e4a5c345b8225ad6","url":"editor/snippets/jsp.js"},{"revision":"9cf6aa19868c8d871461bf9b5efc8202","url":"editor/snippets/jssm.js"},{"revision":"20c492ff9fd09239d642a85552b7e154","url":"editor/snippets/jsx.js"},{"revision":"5b6e35017c45c25319b5bed1d33c17bb","url":"editor/snippets/julia.js"},{"revision":"5e3411b4c7419c918925ba0402bcdafe","url":"editor/snippets/kotlin.js"},{"revision":"3640d8a613ebab363af7baa5b10a0277","url":"editor/snippets/latex.js"},{"revision":"48cfa7815408a0d6f7f05668cb38c4ba","url":"editor/snippets/latte.js"},{"revision":"2ed761fc69731019548d7377032e72cd","url":"editor/snippets/less.js"},{"revision":"80507f1f3ffafd9360590d0b1f823305","url":"editor/snippets/liquid.js"},{"revision":"04158d6e2a1b232074315566ec05c92e","url":"editor/snippets/lisp.js"},{"revision":"0b58104ef6917658bfc80395acff0d42","url":"editor/snippets/livescript.js"},{"revision":"243ee5a820100a45670211c37ab56852","url":"editor/snippets/logiql.js"},{"revision":"cec3b5ec221114260a32280ee7154234","url":"editor/snippets/logtalk.js"},{"revision":"a48dcb596e48dd94d531c56d6b38bd3d","url":"editor/snippets/lsl.js"},{"revision":"ce7e42cacb2273b030798ce20b78dc38","url":"editor/snippets/lua.js"},{"revision":"191fb0590101cbecd6fba2bc68196ed8","url":"editor/snippets/luapage.js"},{"revision":"6f240a1e972f22534da0e65bf7cb9f02","url":"editor/snippets/lucene.js"},{"revision":"7d751f2591bcfd7af3b27e8f722d4374","url":"editor/snippets/makefile.js"},{"revision":"186ada9e021878db0d18f5874fa2ffb8","url":"editor/snippets/markdown.js"},{"revision":"2666b47557d4c8a7aaefb176a99b72e4","url":"editor/snippets/mask.js"},{"revision":"94da8478bdddeb3096165953a9217647","url":"editor/snippets/matlab.js"},{"revision":"eb1ae5c6c19d5214e50232963bab423c","url":"editor/snippets/maze.js"},{"revision":"1e6e9b5e84c5574f21c093015f4e4d87","url":"editor/snippets/mediawiki.js"},{"revision":"9b280935b51a992e6fb5b4566ada1eff","url":"editor/snippets/mel.js"},{"revision":"fa0852a48026ce90e8a3e342d40d615c","url":"editor/snippets/mips.js"},{"revision":"aa705ddee7006136dc373d627dc81548","url":"editor/snippets/mixal.js"},{"revision":"0e493b7068816753af2efb888efdcdc4","url":"editor/snippets/mushcode.js"},{"revision":"46a20fcc46bd47834a3008b337e9b775","url":"editor/snippets/mysql.js"},{"revision":"56e4afb289dc7471bc30e6040627defc","url":"editor/snippets/nginx.js"},{"revision":"b27b9294d835d41e5c0c4a85fc87c19a","url":"editor/snippets/nim.js"},{"revision":"83e57f7b6bb8132c4c792f855bc97ed5","url":"editor/snippets/nix.js"},{"revision":"2b46671536d39a5e6345ffceff3e2a69","url":"editor/snippets/nsis.js"},{"revision":"244a7e3bb7142dfba79a1fb18bf439cc","url":"editor/snippets/nunjucks.js"},{"revision":"c8ba71185f3ea30f58aee40a18dc2b85","url":"editor/snippets/objectivec.js"},{"revision":"ee505bee7e780e7c2c4eaf3eb9991809","url":"editor/snippets/ocaml.js"},{"revision":"b88e471bbb7bd0dbe5bd9f0d31b0abcb","url":"editor/snippets/partiql.js"},{"revision":"f90d0faec18801e0c3e5b0ea3626ead6","url":"editor/snippets/pascal.js"},{"revision":"cd89104d439cd408772137c03d8dbbc9","url":"editor/snippets/perl.js"},{"revision":"3b7185e879f76f8eae837322319226f0","url":"editor/snippets/pgsql.js"},{"revision":"1937912816ead8c2ad3372da18cf957d","url":"editor/snippets/php_laravel_blade.js"},{"revision":"1141ef22b6f51cc7f3f20bb26f2d12fb","url":"editor/snippets/php.js"},{"revision":"eeb92d5a71154a6e74e5b6d8cf317868","url":"editor/snippets/pig.js"},{"revision":"8a7bd2781388d769c8c6284fd6acbb82","url":"editor/snippets/plain_text.js"},{"revision":"db34c9bc106034088af3463c930bed08","url":"editor/snippets/powershell.js"},{"revision":"2e966a8bde662bb6c5bc8c00172648b5","url":"editor/snippets/praat.js"},{"revision":"745a07efaeac9b5aea10268e71053f2d","url":"editor/snippets/prisma.js"},{"revision":"9ed31a5e4962e6789e95b90b44389d95","url":"editor/snippets/prolog.js"},{"revision":"694c414b150a01372728ccd093c5ad29","url":"editor/snippets/properties.js"},{"revision":"138943baf650b22516c879c81cb7bebd","url":"editor/snippets/protobuf.js"},{"revision":"1ecd9e32a4748749b677580db829bfc7","url":"editor/snippets/puppet.js"},{"revision":"e0481705dc8cf2cc58bcb5b48496f2e8","url":"editor/snippets/python.js"},{"revision":"b9fb08149997cd5e5e0a3ab89da4adcc","url":"editor/snippets/qml.js"},{"revision":"17c6e0664ed627f255d2afacfb17d99f","url":"editor/snippets/r.js"},{"revision":"27b2c05126360a4c4fd84e9d865ddcc6","url":"editor/snippets/raku.js"},{"revision":"f20e2edcf68ece58e47a64a3f603a2c7","url":"editor/snippets/razor.js"},{"revision":"22ef0df7c5b42cdcf6fcebe7283c2e1c","url":"editor/snippets/rdoc.js"},{"revision":"7f62c2836afe4049ea1dcc38cb9c1e88","url":"editor/snippets/red.js"},{"revision":"f3db0966cc859a452c2df7af86753f0a","url":"editor/snippets/redshift.js"},{"revision":"d335d5bc0fc0c363a4a5a4e7794796d5","url":"editor/snippets/rhtml.js"},{"revision":"d2a2cfd2a210c7d8e1bc9f20acca3f0e","url":"editor/snippets/robot.js"},{"revision":"06220dc4573542743cd6629ac78d9554","url":"editor/snippets/rst.js"},{"revision":"631a618fa4ebc5e7647657dbd508a6a9","url":"editor/snippets/ruby.js"},{"revision":"c3920f9f101e4f34d5478e794bbaaa81","url":"editor/snippets/rust.js"},{"revision":"43e391e92151ca2fbb32ab782992688e","url":"editor/snippets/sac.js"},{"revision":"e89c08d82964f36dfd672787b3fb15b7","url":"editor/snippets/sass.js"},{"revision":"092685484645fc7c1a3a0184d895e771","url":"editor/snippets/scad.js"},{"revision":"3b97b7d315718dfc8b0884367c3c93d5","url":"editor/snippets/scala.js"},{"revision":"7933cf3e5e515e8a3a8802411af602bc","url":"editor/snippets/scheme.js"},{"revision":"e46313be3b750e0a5f63626606be9cf0","url":"editor/snippets/scrypt.js"},{"revision":"fb08893beff9e874884387cefdc6b303","url":"editor/snippets/scss.js"},{"revision":"0579a52b1da5b945a1034175f2010e03","url":"editor/snippets/sh.js"},{"revision":"d6be3ec1b851a180b005ad74fe0742f5","url":"editor/snippets/sjs.js"},{"revision":"41a9e1cf5f84a0c643eb28a786be5b30","url":"editor/snippets/slim.js"},{"revision":"46f35fafd7f6035f74caafd257a3cb6b","url":"editor/snippets/smarty.js"},{"revision":"da689907e7b96d242672fe5e3027f587","url":"editor/snippets/smithy.js"},{"revision":"75aff75e0a3a823eb682e7e8ed8675c0","url":"editor/snippets/snippets.js"},{"revision":"3908cb71f426649ea0544e9e5926b5dd","url":"editor/snippets/soy_template.js"},{"revision":"d54f664307b83f02a6bc44f997974909","url":"editor/snippets/space.js"},{"revision":"423bd67ce3d91972c508005a351939ea","url":"editor/snippets/sparql.js"},{"revision":"333c701a7b24109d82aed2ff719f6249","url":"editor/snippets/sql.js"},{"revision":"ff747bde2813614807ad5bebc140148d","url":"editor/snippets/sqlserver.js"},{"revision":"e1a3ceafa32068ef8ba8f3ab22f12bb0","url":"editor/snippets/stylus.js"},{"revision":"f85e7cee93262a8a24dfc14a4bf72701","url":"editor/snippets/svg.js"},{"revision":"e13155fe4ee38bc34868934d83ecfdb4","url":"editor/snippets/swift.js"},{"revision":"e8d493f6e321b6bb0b8a9860ae144f9f","url":"editor/snippets/tcl.js"},{"revision":"867ab3ab337a27f6753b374507e3b7b5","url":"editor/snippets/terraform.js"},{"revision":"66ba5c611b294c07dfb09ff063313e46","url":"editor/snippets/tex.js"},{"revision":"2f25a4f48b95772b59f59484da6f6db9","url":"editor/snippets/text.js"},{"revision":"4075857ebe7525814a669082bfe166c6","url":"editor/snippets/textile.js"},{"revision":"850c17a05f9bd7ab538092ed48f4b1f6","url":"editor/snippets/toml.js"},{"revision":"69d959df7fabff21d3e3252434de0f1e","url":"editor/snippets/tsx.js"},{"revision":"0a3cddd4ea0917731408ede0e482be45","url":"editor/snippets/turtle.js"},{"revision":"8effd9d0880833c7fbf3f760571197d7","url":"editor/snippets/twig.js"},{"revision":"951c759b1a624e806917aae213738333","url":"editor/snippets/typescript.js"},{"revision":"8d0db09f1d9ced0ba2ee9fc02661f2b2","url":"editor/snippets/vala.js"},{"revision":"ae175403f79f4b274d69b656a1ea7a61","url":"editor/snippets/vbscript.js"},{"revision":"11180b3cfa6290d04e0f567711d07d2c","url":"editor/snippets/velocity.js"},{"revision":"1e5246f8e6a03dd4197ea028ffcebe09","url":"editor/snippets/verilog.js"},{"revision":"476406bb0967503cedfbe1b2f22d52c1","url":"editor/snippets/vhdl.js"},{"revision":"c2364268f0f5bc4d55de2323b9ef5ebc","url":"editor/snippets/visualforce.js"},{"revision":"bfdaebf5d3e61a011f4989fc2233d803","url":"editor/snippets/wollok.js"},{"revision":"322c5932f01478eb1377f05b85192be5","url":"editor/snippets/xml.js"},{"revision":"f2afa98b9b7dde7c88d4e8fcfb693fe3","url":"editor/snippets/xquery.js"},{"revision":"02e68efdd67430a5cb86178c824e6fed","url":"editor/snippets/yaml.js"},{"revision":"6b31d5539848f6c0778140f8ee0153d7","url":"editor/snippets/zeek.js"},{"revision":"8f4d22e5c008cd8e1a7cb40f299aac26","url":"editor/theme-ambiance.js"},{"revision":"b6cd24d935775bfa09c24893bbb4f92e","url":"editor/theme-chaos.js"},{"revision":"930d848be8ffa0d916f62de457d974df","url":"editor/theme-chrome.js"},{"revision":"3415207d260fa23ac45a8ddb47587dec","url":"editor/theme-cloud9_day.js"},{"revision":"850af50d4187ae2194c83b67b385f311","url":"editor/theme-cloud9_night_low_color.js"},{"revision":"1bf4cfca4f129b807cffd62579a46a79","url":"editor/theme-cloud9_night.js"},{"revision":"7836c9a591f232f066978367b8516794","url":"editor/theme-clouds_midnight.js"},{"revision":"94395d0d0be952c7c8cbf64a8a781e5a","url":"editor/theme-clouds.js"},{"revision":"34623f8ede9f7283085cc0cca96bb839","url":"editor/theme-cobalt.js"},{"revision":"6ff500ed5873bda8febf4f0a8b5717d7","url":"editor/theme-crimson_editor.js"},{"revision":"7794347a814c5a3103aab9e9519417d5","url":"editor/theme-dawn.js"},{"revision":"712dcaab3e78bc4fda61c2ac8f7a1af4","url":"editor/theme-dracula.js"},{"revision":"4dc41b7ef17e35021fc9d5b913639b9b","url":"editor/theme-dreamweaver.js"},{"revision":"20e7f881208fad11c3fd83b99d14e1af","url":"editor/theme-eclipse.js"},{"revision":"956632265b86d264f8e70e99c606b3a4","url":"editor/theme-github.js"},{"revision":"502bd496934fde034fc3ffee93cd5446","url":"editor/theme-gob.js"},{"revision":"77a7cb37e2c0cc03a023d7e38407a5ef","url":"editor/theme-gruvbox_dark_hard.js"},{"revision":"334d677c772ee172b50961a6a9a19ac8","url":"editor/theme-gruvbox_light_hard.js"},{"revision":"37e2dd5d909d2183c0266df1ee4b1928","url":"editor/theme-gruvbox.js"},{"revision":"5f64537a38944244680ca37ddc4be2fe","url":"editor/theme-idle_fingers.js"},{"revision":"ae15b3c94db58d2dfd8585075d7dd5fb","url":"editor/theme-iplastic.js"},{"revision":"27bbddb62c5854d4e3039d76daa6e863","url":"editor/theme-katzenmilch.js"},{"revision":"f7fa7e3fce19f0727cf1e0bb2c666ad6","url":"editor/theme-kr_theme.js"},{"revision":"1628b6aa06eb3bfa6a18a5a1f4647bf1","url":"editor/theme-kuroir.js"},{"revision":"f4736757506c6d76d4ad11716c8cde01","url":"editor/theme-merbivore_soft.js"},{"revision":"7edf73691574056f71e24adfde47a7fd","url":"editor/theme-merbivore.js"},{"revision":"4209b20af898f8cdc601b1bee2e5f570","url":"editor/theme-mono_industrial.js"},{"revision":"0d1c183d8f5b86050b2a98481b4fb1a7","url":"editor/theme-monokai.js"},{"revision":"682de949cfd20b5aee8a8fff7f701e00","url":"editor/theme-nord_dark.js"},{"revision":"acb189f0795a5b0a4ef875ac94122673","url":"editor/theme-one_dark.js"},{"revision":"088a3e00fb2ddaca30124420bc1cb0da","url":"editor/theme-pastel_on_dark.js"},{"revision":"30676b9d8660ee2b23aa530a8dfb7c57","url":"editor/theme-solarized_dark.js"},{"revision":"1e9144c9c160286eee85fd9fcccfceaf","url":"editor/theme-solarized_light.js"},{"revision":"d5bbe83e46543fa6587ab0cbb9c61c4f","url":"editor/theme-sqlserver.js"},{"revision":"6563fda851cdc92f0c6a986567d1469e","url":"editor/theme-terminal.js"},{"revision":"c18fe9bb15694fe9b70e624b160e3f6d","url":"editor/theme-textmate.js"},{"revision":"7556f6e6e8832e30daef6bb634f1598c","url":"editor/theme-tomorrow_night_blue.js"},{"revision":"c4f73116062fe16d2b3513eaecb5b572","url":"editor/theme-tomorrow_night_bright.js"},{"revision":"dff02336c9341d7163cc2c0dd8867e69","url":"editor/theme-tomorrow_night_eighties.js"},{"revision":"5904a268bd28fecf4c3509cae8202147","url":"editor/theme-tomorrow_night.js"},{"revision":"527297c2934b2cbe588b22347bd648a6","url":"editor/theme-tomorrow.js"},{"revision":"fb4f0cf9cf11063d86de20245ea20c1b","url":"editor/theme-twilight.js"},{"revision":"92a6e53b4e913e262de3c90188a233cb","url":"editor/theme-vibrant_ink.js"},{"revision":"ce7fba20fcae7f396a55cbdc69b178db","url":"editor/theme-xcode.js"},{"revision":"1a0886d95c3bbe48b835cbcc1cbd75a2","url":"editor/worker-base.js"},{"revision":"d164b3dd44c8e186b9bf7dfe8f1286c1","url":"editor/worker-coffee.js"},{"revision":"327fa40b285ffd8f1a5104f088e1b742","url":"editor/worker-css.js"},{"revision":"a3ad0fea82dc07fd872ce199ec838f24","url":"editor/worker-html.js"},{"revision":"3d5a5047da5bea82d411648207af8dfb","url":"editor/worker-javascript.js"},{"revision":"fbb8b930587489e5ec1bd946347ebf0e","url":"editor/worker-json.js"},{"revision":"c6e4701d431b827a3c25a8dc72aba185","url":"editor/worker-lua.js"},{"revision":"f0a32e24a2dae6e0f49fce3d1a9d2123","url":"editor/worker-php.js"},{"revision":"5453e009992fb05e9027206f09eb36e5","url":"editor/worker-xml.js"},{"revision":"65ad67ddf6b5dd0d88bbf2f5642c50e2","url":"editor/worker-xquery.js"},{"revision":"1ec6da9d73150e5aed3e3e25723f7baf","url":"editor/worker-yaml.js"},{"revision":"144059e7f6d70f54013a6d49b8290188","url":"icon.7c797545.svg"},{"revision":"929580338d2e897b6ace2eacb5f2e28a","url":"icon.ico"},{"revision":"34a11fcb1d51bb357704dc1a5c745888","url":"index.0153c984.js"},{"revision":"8816a9104ab54116b5be2d4a75484ff6","url":"index.0ac0f3c8.js"},{"revision":"2f6139cb8c00992da8e20574cd3c3d88","url":"index.1a812bf0.js"},{"revision":"fb3ff638e28a1dfb9b214752c233dc24","url":"index.1df2912f.js"},{"revision":"801e9537fca777864648580c492eb5c6","url":"index.229f720f.js"},{"revision":"5ae3f56b7a0b0b8b622a7973cc59f355","url":"index.24f0c54e.js"},{"revision":"8ced385472b098ba99d4fdfb5c9c592a","url":"index.30752122.js"},{"revision":"c0a5540c577f86019058b3db2b407f98","url":"index.3a807d43.js"},{"revision":"a7305637919605f6931a44d464b8139a","url":"index.7858ef28.js"},{"revision":"27d3880991de349e48c4caeff1490325","url":"index.7d8e468d.js"},{"revision":"07b5ab688611a4837f74a9ffebb860c8","url":"index.982bb4b6.js"},{"revision":"72d896ae021c6b8b7ce074277a86c757","url":"index.a69aa295.js"},{"revision":"4bfe31086c6600efd5b19d805ef70509","url":"index.c8195391.js"},{"revision":"d630aad059157543bccd911e66ea71e9","url":"index.f0b769e6.js"},{"revision":"b1d1aee302f994c53cb2f14fb2fcebc4","url":"index.f2e984ae.js"},{"revision":"45c1f4ccb32416f2854f8a1b770ad84b","url":"index.f6a88ae0.js"},{"revision":"727c8b3d1935261930e50af2bfd80528","url":"index.f792c930.js"},{"revision":"3ec4d26317e0533a7d778d309c60f528","url":"index.html"},{"revision":"0d487e91c2994821669c9a500c054b3d","url":"logo_512.db4c5fbd.png"},{"revision":"37ca3039aada3760fe0cffdd638e14b8","url":"logo.abbc2cae.png"},{"revision":"82a0cc7824bbd5dfa1d2252a7467304a","url":"manifest.webmanifest"},{"revision":"55cb77845dc6817b98aad933c629109b","url":"source-code-pro-v13-latin-600.15f00b22.svg"},{"revision":"c04ecf579206d800d0f90e11fa510af0","url":"source-code-pro-v13-latin-regular.91afd03e.svg"},{"revision":"0395a2f920afdbd3809771a719326c3c","url":"source-sans-pro-v14-latin-600.234ae412.svg"},{"revision":"8ac4b6c1ecf5bb10cf24da73fc3dc5a5","url":"source-sans-pro-v14-latin-700.df9681de.svg"},{"revision":"d8ed67444c745412eb4398e3a2a80fa6","url":"source-sans-pro-v14-latin-regular.32b4dc53.svg"},{"revision":"5b4bdd8cb246a1ad7c7a310109323ca0","url":"source-serif-pro-v10-latin-600.a8e70b44.svg"},{"revision":"0ea9f1a1fbe1df432ef62bf8c0c6d1bf","url":"source-serif-pro-v10-latin-700.90cffcb9.svg"},{"revision":"40d6fdac5c3acaef948a64cc8b2ec049","url":"up_/up_/assets/logo_192.png"}])
