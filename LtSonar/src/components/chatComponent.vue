<!--

@copyright (c) 2020. Jonathan. All Rights Reserved.
-->
<template>
    <div class="chat-component">
        <h2 class="chat-title">Chat</h2>
        <div class="chat-box">
            <div v-for="(index, i) in getChat.messages" :key="i" class="dialog-item">
                <p><span>{{`${getChat.messages[i].sender}: `}}</span>{{getChat.messages[i].msg}}</p>
            </div>
        </div>
        <div class="chat-form">
            <input id="send-input" v-model="message" type="text" name="msg" placeholder="type message">
            <button  @click="sendMessageTo(message)">
                Send
            </button>
        </div>
    </div>
</template>
<script>
    import Controller from '@/../lib/controller'

    // import other components you use here...

    class ChatController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                message: ""
            }
            this.props = { 
                speaker: String
            }

            this.injectGetters(['getChat'])
            this.injectActions(["SendMessage"])
        }

        sendMessageTo(message) {
            if (message != "")
            {   
                this.message = " "
                let newMessage = {
                    msg: message,
                    sender: this.$options.propsData.speaker
                }

                this.SendMessage(newMessage)
            }
        }
    }

    export default new ChatController('pgChat');

</script>
<style scoped>
    .chat-component {
        display: flex;
        height: 100%;
        width: 15vw;
        margin-right: 20px;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        flex-direction: column;
        justify-content: space-between;
    }
    .chat-title {
        background: darkblue;
        color: white;
        text-align: center;
        text-transform: uppercase;
        margin: 0 0 20px;
        height: 35px;
    }

    .chat-box {
        padding: 20px;
        height: calc(78vh - 75px);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .dialog-item {
        margin-top: 10px;
    }

    .dialog-item span {
        font-weight: bold;
        margin-top:10px;
    }

    .chat-form {
        display: flex;
        align-items: center;
        height: 40px;
    }

    .chat-form {
        display: flex;
        align-items: center;
        height: 40px;
    }

    .chat-form input{
        height: 100%;
        width: 70%;
        border: none;
        padding-left: 10px;
    }
    .chat-form button{
        height: 100%;
        width: 30%;
        border: none;
        background: #333333;
        color: white;
        text-transform: uppercase;
    }
</style>