/*!
 * Antinus Innovation
 * All rights reserved
 */
webpackJsonp([0],{508:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=m(t(21)),l=m(t(1)),o=m(t(22)),i=m(t(2)),r=m(t(3)),s=m(t(0)),u=(t(47),m(t(223))),f=m(t(509)),c=m(t(225)),d=m(t(511)),_=(m(t(514)),m(t(517))),p=m(t(224));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function n(){var e,t,o,r;(0,l.default)(this,n);for(var s=arguments.length,u=Array(s),f=0;f<s;f++)u[f]=arguments[f];return t=o=(0,i.default)(this,(e=n.__proto__||(0,a.default)(n)).call.apply(e,[this].concat(u))),o.state={play1:!1,play2:!1},o.showGoBack=function(){o.setState({play2:!0})},o.showNotFound=function(){o.setState({play1:!0})},r=t,(0,i.default)(o,r)}return(0,r.default)(n,e),(0,o.default)(n,[{key:"render",value:function(){var e=this.props,n=(e.match,e.history),t=(e.location,e.ined);return s.default.createElement("div",{className:f.default.container},s.default.createElement("div",{className:f.default.goBackContainer},s.default.createElement(_.default,{play:this.state.play2},s.default.createElement(u.default,{onClick:n.goBack,text:"<-"}))),s.default.createElement("div",{className:f.default.numberContainer},s.default.createElement(d.default,{play:t,onEntered:this.showNotFound},s.default.createElement("div",{className:f.default.number},"404"))),s.default.createElement("div",{className:f.default.textContainer},s.default.createElement(p.default,{play:this.state.play1,onEntered:this.showGoBack},s.default.createElement("div",{className:f.default.text},"Not Found"))))}}]),n}(s.default.PureComponent);n.default=(0,c.default)(h)},509:function(e,n,t){var a=t(510);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0};t(26)(a,l);a.locals&&(e.exports=a.locals)},510:function(e,n,t){(n=e.exports=t(25)(!1)).push([e.i,".gy69srH9L10UTo4nYdpkf {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  margin: 0;\n  padding: 0;\n}\n.OGCTgYbwbcee5jIW9rpsm {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n}\n.qN3vmnnCbhkugzGUTS-nK {\n  width: 45%;\n  height: 100%;\n  margin-right: 5%;\n}\n._120reFnUZyQKoNMn_fZF82 {\n  position: relative;\n  width: 80px;\n  height: 100%;\n}\n._1JJd_SgwY0SbWDoTBJe9eD {\n  flex-grow: 1;\n  height: 100%;\n}\n.j7_OrulB-5c3d69bMNzBe {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  font-size: 60px;\n  font-weight: bold;\n}\n._1tlLlNKfNyXoVu9CGBq-gX {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 60px;\n  font-weight: bold;\n}\n",""]),n.locals={fullSpaceBFC:"gy69srH9L10UTo4nYdpkf",container:"OGCTgYbwbcee5jIW9rpsm",numberContainer:"qN3vmnnCbhkugzGUTS-nK",goBackContainer:"_120reFnUZyQKoNMn_fZF82",textContainer:"_1JJd_SgwY0SbWDoTBJe9eD",number:"j7_OrulB-5c3d69bMNzBe",text:"_1tlLlNKfNyXoVu9CGBq-gX"}},511:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(t(222)),l=o(t(512));function o(e){return e&&e.__esModule?e:{default:e}}n.default=(0,a.default)(l.default,{enter:1e3,exit:1e3})},512:function(e,n,t){var a=t(513);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0};t(26)(a,l);a.locals&&(e.exports=a.locals)},513:function(e,n,t){(n=e.exports=t(25)(!1)).push([e.i,"._3DakoqgktJ3TFF3KygJWZc,\n._3NYFUPgB_g-X9sPdFcYA5W {\n  margin-left: -100%;\n  transition: all 1000ms ease;\n}\n._8WXIf3j3MmBIz7COYYjgy,\n._3-ZLrXv71_dv0AsY5duaQX {\n  margin-left: 0;\n}\n.SmFlZOMtWODzkY1V94U_C {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._2dFyMmH7swpY7bsg_iesSC {\n  margin-left: 100%;\n}\n",""]),n.locals={appear:"_3DakoqgktJ3TFF3KygJWZc",enter:"_3NYFUPgB_g-X9sPdFcYA5W",appearActive:"_8WXIf3j3MmBIz7COYYjgy",enterActive:"_3-ZLrXv71_dv0AsY5duaQX",exit:"SmFlZOMtWODzkY1V94U_C",exitActive:"_2dFyMmH7swpY7bsg_iesSC"}},514:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(t(222)),l=o(t(515));function o(e){return e&&e.__esModule?e:{default:e}}n.default=(0,a.default)(l.default,{enter:1e3,exit:1e3})},515:function(e,n,t){var a=t(516);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0};t(26)(a,l);a.locals&&(e.exports=a.locals)},516:function(e,n,t){(n=e.exports=t(25)(!1)).push([e.i,"._3hwudpTeyLYH2xh5VAcX3S,\n._3K3MLY3-pnjMOc9oCU1a7H {\n  margin-left: 100%;\n  transition: all 1000ms ease;\n}\n._1ToJ3k5ooo2mf-aiTiXNhU,\n._230K8O_Uf-SGrn7vBEAXOd {\n  margin-left: 0;\n}\n._38DARqZ2v1EYn5lE2YkwPu {\n  transition: all 1000ms ease;\n  margin-left: 0;\n}\n._2RLNx_lhDM_9yJ5TyzL_-_ {\n  margin-left: -100%;\n}\n",""]),n.locals={appear:"_3hwudpTeyLYH2xh5VAcX3S",enter:"_3K3MLY3-pnjMOc9oCU1a7H",appearActive:"_1ToJ3k5ooo2mf-aiTiXNhU",enterActive:"_230K8O_Uf-SGrn7vBEAXOd",exit:"_38DARqZ2v1EYn5lE2YkwPu",exitActive:"_2RLNx_lhDM_9yJ5TyzL_-_"}},517:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o(t(222)),l=o(t(518));function o(e){return e&&e.__esModule?e:{default:e}}n.default=(0,a.default)(l.default,{enter:1e3,exit:1e3})},518:function(e,n,t){var a=t(519);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0};t(26)(a,l);a.locals&&(e.exports=a.locals)},519:function(e,n,t){(n=e.exports=t(25)(!1)).push([e.i,".H61-5INs6hlB9tTamneFE,\n._112H4vQ5L-uhAliS-Npc_K {\n  top: 100%;\n  position: absolute;\n  transition: all 1000ms ease;\n}\n._14OkmS7Uu_nGPCh1hrTpHJ,\n._1uMj6c0f5vjZbxgf_jc-0k {\n  position: absolute;\n  top: 0;\n}\n.u7i6sCmM7srUdllrQs6tE {\n  position: absolute;\n  transition: all 1000ms ease;\n  bottom: 0;\n}\n._1LI-5KslX1AM69WOY3SKSc {\n  position: absolute;\n  bottom: 100%;\n}\n",""]),n.locals={appear:"H61-5INs6hlB9tTamneFE",enter:"_112H4vQ5L-uhAliS-Npc_K",appearActive:"_14OkmS7Uu_nGPCh1hrTpHJ",enterActive:"_1uMj6c0f5vjZbxgf_jc-0k",exit:"u7i6sCmM7srUdllrQs6tE",exitActive:"_1LI-5KslX1AM69WOY3SKSc"}}});