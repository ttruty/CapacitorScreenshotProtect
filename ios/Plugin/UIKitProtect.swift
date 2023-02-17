//
//  UIView+SnapshotSafeController.swift
//
//
//  Created by Илья Князьков on 10.11.2022.
//

import UIKit
import Foundation
import Capacitor

public extension WKWebView {

    /// Wraps view in ``SnpashotSafeController`` with saving ``Auto Layout`` properties.
    /// But this is irreversible process and for much control use directly ``SnapshotSaveController`` instead.
    /// - Warning: May destroy layout of view!
    /**
     # Example
     ```swift
     let someView = UIView()

     someView.translatesAutoresizingMaskIntoConstraints = false
     someView.topAnchor.constraint(superView.topAnchor, constant: 12).isActive = true
     someView.setupAsHiddenFromScreenshot()
     ```
     */

    func makeSecure() {
            let field = UITextField()
            field.isSecureTextEntry = true
            field.translatesAutoresizingMaskIntoConstraints = false
            field.tag = 100
            self.addSubview(field)
            field.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
            field.centerXAnchor.constraint(equalTo: self.centerXAnchor).isActive = true
            self.layer.superlayer?.addSublayer(field.layer)
            field.layer.sublayers?.first?.addSublayer(self.layer)
    }

    func removeSecure() {
        for view in self.subviews {
            if let textField = view as? UITextField {
                print(textField.text!)
                textField.removeFromSuperview()
            }
        }
    }
}
