//  Функция превращает имя пользователя в два символа
// Нужна для генерации аватарки у пользователя

export function generateAvatarName(name: string): string {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 2) {
    const [firstWord, secondWord] = parts;

    return `${firstWord[0]}${secondWord[0]}`.toUpperCase();
  }

  const match = name.match(/^([^\d]+)(\d+)$/);
  if (match) {
    const [, word, number] = match;

    return `${word[0]}${number[0]}`.toUpperCase();
  }

  return name.slice(0, 2).toUpperCase();
}
