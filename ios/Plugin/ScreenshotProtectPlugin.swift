import Foundation
import Capacitor
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreenshotProtectPlugin)
public class ScreenshotProtectPlugin: CAPPlugin {
    private let implementation = ScreenshotProtect()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func protectScreen(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.bridge?.webView?.makeSecure()
        }
        call.resolve()
    }

    @objc func disable(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.bridge?.webView?.removeSecure()
        }
        call.resolve()
    }
}
