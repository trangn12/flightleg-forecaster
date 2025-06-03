def parse_airports(file_path):
    locations = []

    with open(file_path, 'r') as file:
        for line in file:
            parts = line.strip().split(':')

            # Skip if not enough parts or if lat/lng are both 0.0
            if len(parts) < 15:
                continue

            city = parts[2] if parts[2] != 'N/A' else parts[3]
            lat_str = parts[14]
            lng_str = parts[15]

            try:
                lat = float(lat_str)
                lng = float(lng_str)
            except ValueError:
                continue  # Skip malformed lines

            if lat == 0.0 and lng == 0.0:
                continue

            # Add valid entry
            locations.append(f"  {{ lat: {lat}, lng: {lng}, city: '{city}', size: 0.80, type: 'city' }}, // {parts[0]}")

    return locations


def main():
    file_path = 'Airports.txt'
    locations = parse_airports(file_path)

    print("const locations = [")
    for loc in locations:
        print(loc)
    print("];")


if __name__ == '__main__':
    main()
