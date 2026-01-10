//
//  String.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 10/01/26.
//  Copyright © 2026 geckos.ink. All rights reserved.
//

import Foundation

/// Truncates `text` to at most `maxCharacters` characters.
/// If truncation happens, the result ends with "..." (included in the limit when possible).
///
/// Examples:
/// - truncate("Hello world", maxCharacters: 5) -> "He..."
/// - truncate("Hello", maxCharacters: 5)      -> "Hello"
/// - truncate("Hello", maxCharacters: 2)      -> ".."    (best effort)
func truncate(_ text: String, maxCharacters: Int) -> String {
    guard maxCharacters >= 0 else { return "" }
    guard text.count > maxCharacters else { return text }
    guard maxCharacters > 0 else { return "" }

    let ellipsis = "..."
    // If there's not enough room for "..." + at least 1 original char,
    // return as many dots as we can fit.
    if maxCharacters <= ellipsis.count {
        return String(repeating: ".", count: maxCharacters)
    }

    let keepCount = maxCharacters - ellipsis.count
    let endIndex = text.index(text.startIndex, offsetBy: keepCount)
    return String(text[..<endIndex]) + ellipsis
}
