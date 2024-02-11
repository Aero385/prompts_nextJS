def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    number_word_map = {}
    for line in lines:
        parts = line.strip().split(' ')
        number_word_map[int(parts[0])] = parts[1]


    pyramid_numbers = []
    next_number = 1
    i = 1
    while next_number in number_word_map:
        pyramid_numbers.append(next_number)
        next_number += i
        i += 1

    message = ' '.join(number_word_map[number] for number in pyramid_numbers)

    return message.lower()