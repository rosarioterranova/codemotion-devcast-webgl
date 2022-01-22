let unityInstance = null
let speed = 50

createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "Build/Build.data",
        frameworkUrl: "Build/Build.framework.js",
        codeUrl: "Build/Build.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "codemotion",
        productVersion: "0.1",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
  }).then((unityInstanceRef) =>{
    unityInstance = unityInstanceRef
  })

document.getElementById("rotate-up").addEventListener("click", ()=>{
    unityInstance.SendMessage("codemotionPrefab", "ChangeRotation","up")
})

document.getElementById("rotate-down").addEventListener("click", ()=>{
    unityInstance.SendMessage("codemotionPrefab", "ChangeRotation","down")
})
document.getElementById("rotate-left").addEventListener("click", ()=>{
    unityInstance.SendMessage("codemotionPrefab", "ChangeRotation","left")
})
document.getElementById("rotate-right").addEventListener("click", ()=>{
    unityInstance.SendMessage("codemotionPrefab", "ChangeRotation","right")
})
document.getElementById("speed-up").addEventListener("click", ()=>{
    speed += 10
    document.getElementById("speed-indicator").innerText = speed
    unityInstance.SendMessage("codemotionPrefab", "ChangeSpeed",speed)
})
document.getElementById("speed-down").addEventListener("click", ()=>{
    speed -= 10
    document.getElementById("speed-indicator").innerText = speed
    unityInstance.SendMessage("codemotionPrefab", "ChangeSpeed",speed)
})