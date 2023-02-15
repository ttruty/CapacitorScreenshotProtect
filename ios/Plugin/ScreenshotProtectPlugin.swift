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
    
    private var isEnabled = true
    private var privacyViewController: UIViewController?

    override public func load() {
        self.isEnabled = privacyScreenConfig().enable
        self.privacyViewController = UIViewController()
        
        DispatchQueue.main.async {
            let window = self.bridge?.viewController?.view
            var hiddenFromScreenshot = ScreenshotProtectController(content: window!)
            hiddenFromScreenshot.setupContentAsHiddenInScreenshotMode() // apply hidden mode
            
        }
    }

    @objc func enable(_ call: CAPPluginCall) {
        self.isEnabled = true
        call.resolve()
    }

    @objc func disable(_ call: CAPPluginCall) {
        self.isEnabled = false
        call.resolve()
    }

    private func privacyScreenConfig() -> ScreenshotProtectConfig {
        var config = ScreenshotProtectConfig()

        if let enable = getConfigValue("enable") as? Bool {
            config.enable = enable
        }
        return config
    }
}
