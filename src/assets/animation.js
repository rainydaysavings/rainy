function anim() {
    let CharacterPos = 0;
    let MsgBuffer = "";
    const TypeDelay = 300;
    let MsgIndex = 0;
    let delay;
    const MsgArray = ["./Eliseu Amaro"];

    function StartTyping() {
        const id = document.getElementById("typing-text");
        if (CharacterPos !== MsgArray[MsgIndex].length) {
            MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
            id.value = MsgBuffer+"_";
            delay = TypeDelay;
            id.scrollTop = id.scrollHeight;
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
    StartTyping();
}