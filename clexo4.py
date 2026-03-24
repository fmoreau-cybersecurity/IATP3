def max_de_trois(a, b, c):
    maximum = a
    if b > maximum:
        maximum = b
    if c > maximum:
        maximum = c
    return maximum

n1 = float(input("Entrez le 1er nombre : "))
n2 = float(input("Entrez le 2ème nombre : "))
n3 = float(input("Entrez le 3ème nombre : "))

resultat = max_de_trois(n1, n2, n3)
print(f"Le maximum est {resultat}")