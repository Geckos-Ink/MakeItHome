enum PreviewTitleText {
    private static let preferredBreakCharacters: Set<Character> = [
        " ", "-", "|", ":", "/"
    ]

    static func wrapping(_ text: String, after requestedCharacterLimit: Int) -> String {
        guard !text.isEmpty else {
            return ""
        }

        let characterLimit = max(1, requestedCharacterLimit)
        var wrapped = ""
        wrapped.reserveCapacity(text.count)

        var shouldInsertLineBreak = false
        var charactersSinceLineBreak = 0

        for character in text {
            if (charactersSinceLineBreak % characterLimit) + 1 == characterLimit {
                shouldInsertLineBreak = true
            }

            wrapped.append(character)

            let exceededForcedBreakLimit = charactersSinceLineBreak > characterLimit + 5
            if shouldInsertLineBreak,
               preferredBreakCharacters.contains(character) || exceededForcedBreakLimit {
                wrapped.append("\n")
                shouldInsertLineBreak = false
                charactersSinceLineBreak = -1
            }

            charactersSinceLineBreak += 1
        }

        return wrapped
    }
}
