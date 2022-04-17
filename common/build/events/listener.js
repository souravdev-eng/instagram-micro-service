"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var Listener = /** @class */ (function () {
    function Listener(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    Listener.prototype.subscriptionOptions = function () {
        return this.client
            .subscriptionOptions()
            .setAckWait(this.ackWait)
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setDurableName(this.queueGroupName);
    };
    Listener.prototype.listen = function () {
        var _this = this;
        var subscribe = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscribe.on("message", function (msg) {
            console.log("Message is received ".concat(_this.subject, " / ").concat(_this.queueGroupName));
            var parseData = _this.parseMessage(msg);
            _this.onMessage(parseData, msg);
        });
    };
    Listener.prototype.parseMessage = function (msg) {
        var data = msg.getData();
        return typeof data === "string"
            ? JSON.parse(data)
            : JSON.parse(data.toString("utf8"));
    };
    return Listener;
}());
exports.Listener = Listener;
