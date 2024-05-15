//
//  Extensions.swift
//  MakeItHome
//
//  Created by Riccardo Cecchini on 06/11/22.
//

import Foundation
import CryptoKit

extension String {
    subscript(offset: Int) -> Character { self[index(startIndex, offsetBy: offset)] }
    subscript(range: Range<Int>) -> SubSequence {
        let startIndex = index(self.startIndex, offsetBy: range.lowerBound)
        return self[startIndex..<index(startIndex, offsetBy: range.count)]
    }
    subscript(range: ClosedRange<Int>) -> SubSequence {
        let startIndex = index(self.startIndex, offsetBy: range.lowerBound)
        return self[startIndex..<index(startIndex, offsetBy: range.count)]
    }
    subscript(range: PartialRangeFrom<Int>) -> SubSequence { self[index(startIndex, offsetBy: range.lowerBound)...] }
    subscript(range: PartialRangeThrough<Int>) -> SubSequence { self[...index(startIndex, offsetBy: range.upperBound)] }
    subscript(range: PartialRangeUpTo<Int>) -> SubSequence { self[..<index(startIndex, offsetBy: range.upperBound)] }
}

extension UnsignedInteger where Self: CVarArg {
    var hexa: String { .init(format: "%ll*0x", bitWidth / 4, self) }
}

extension DataProtocol {
    var sha256Digest: SHA256Digest { SHA256.hash(data: self) }
    var sha256Data: Data { .init(sha256Digest) }
    var sha256Hexa: String { sha256Digest.map(\.hexa).joined() }
}
