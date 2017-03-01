var vscode = require('vscode');

function activate(context) {

    var rand = Math.round(Math.random()*((1000*60*20)-(1000*60*3)))+(1000*60*3);

    i = setInterval(function() {

        var uri = vscode.Uri.parse("https://www.youtube.com/watch?v=XgUB3lF9IQA&feature=player_embedded");
        vscode.commands.executeCommand('vscode.open', uri);
        rand = Math.round(Math.random()*((1000*60*20)-(1000*60*3)))+(1000*60*3);

    }, rand);

}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;