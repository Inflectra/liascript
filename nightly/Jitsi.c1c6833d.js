var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("eeh78",(function(n,i){var o,t,s,c;o=n.exports,t="Sync",s=function(){return a},Object.defineProperty(o,t,{get:s,set:c,enumerable:!0,configurable:!0});var r=e("c1rx7"),d=e("2e1Xj");class a extends d.Sync{destroy(){var e;null===(e=this.connection)||void 0===e||e.disconnect(),super.destroy()}async connect(e){super.connect(e),this.domain=e.config||"meet.jit.si",window.JitsiMeetJS?this.init(!0):this.load(["https://meet.jit.si/libs/lib-jitsi-meet.min.js"],this)}init(e,n){const i=this.uniqueID();if(e&&window.JitsiMeetJS&&i){window.JitsiMeetJS.init(),window.JitsiMeetJS.setLogLevel(window.JitsiMeetJS.logLevels.ERROR),this.connection=new window.JitsiMeetJS.JitsiConnection(null,null,{hosts:{domain:this.domain,muc:`conference.${this.domain}`,focus:`focus.${this.domain}`},configOverwrite:{openBridgeChannel:!0},serviceUrl:`https://${this.domain}/http-bind?room=${btoa(i)}`,clientNode:"http://jitsi.org/jitsimeet"});const e=this;this.connection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,(function(){e.conferenceRoom=e.connection.initJitsiConference(btoa(i).toLowerCase(),{configOverwrite:{openBridgeChannel:!0},enableLayerSuspension:!0,p2p:{enabled:!1}}),e.conferenceRoom.setDisplayName(e.token),e.conferenceRoom.on(window.JitsiMeetJS.events.conference.CONFERENCE_JOINED,(()=>{e.sendConnect()})),e.conferenceRoom.on(window.JitsiMeetJS.errors.conference.PASSWORD_REQUIRED,(()=>{e.sendDisconnectError("password required")})),e.conferenceRoom.on(window.JitsiMeetJS.events.conference.USER_JOINED,(n=>{e.users[n]=null})),e.conferenceRoom.on(window.JitsiMeetJS.events.conference.USER_LEFT,(n=>{const i=e.users[n];i&&e.db.removePeer(i),delete e.users[n]})),e.conferenceRoom.on(window.JitsiMeetJS.events.conference.ENDPOINT_MESSAGE_RECEIVED,((n,i)=>{e.users[n.getId()]=n.getDisplayName(),e.applyUpdate(d.base64_to_unit8(i))})),e.conferenceRoom.join()})),this.connection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_FAILED,(n=>{e.sendDisconnectError("Connection failed"+n)})),this.connection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,(n=>{e.disconnect()})),this.connection.connect()}}broadcast(e){try{var n;null===(n=this.conferenceRoom)||void 0===n||n.sendEndpointMessage("",d.uint8_to_base64(e))}catch(e){}}constructor(...e){super(...e),(0,r.default)(this,"users",{})}}}));