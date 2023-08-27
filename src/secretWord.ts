export class SecretWord{
    secretWord: string = '';

    constructor(){
        this.secretWord = this.setSecretWord();
    }

    setSecretWord(): string{

        const secretWords: string[] = [
            "ACIDO", "ADIAR", "IMPAR", "ALGAR", "AMADO", "AMIGO", "ANEXO", "ANUIR", "AONDE", "APELO",
            "AQUEM", "ARGIL", "ARROZ", "ASSAR", "ATRAS", "AVIDO", "AZERI", "BABAR", "BAGRE", "BANHO",
            "BARCO", "BICHO", "BOLOR", "BRASA", "BRAVA", "BRISA", "BRUTO", "BULIR", "CAIXA", "CANSA",
            "CHATO", "CHAVE", "CHEFE", "CHORO", "CHULO", "CLARO", "COBRE", "CORTE", "CURAR", "DEIXO",
            "DIZER", "DOGMA", "DORES", "DUQUE", "ENFIM", "ESTOU", "EXAME", "FALAR", "FARDO", "FARTO",
            "FATAL", "FELIZ", "FICAR", "FOGUE", "FORCA", "FORNO", "FRACO", "FUGIR", "FUNDO", "FURIA",
            "GAITA", "GASTO", "GEADA", "GELAR", "GOSTO", "GRITO", "GUETO", "HONRA", "HUMOR", "IDADE",
            "IDEIA", "IDOLO", "IGUAL", "IMUNE", "INDIO", "INGUA", "IRADO", "ISOLA", "JANTA", "JOVEM",
            "JUIZO", "LARGO", "LASER", "LEITE", "LENTO", "LERDO", "LEVAR", "LIDAR", "LINDO", "LIRO",
            "LONGE", "LUZES", "MAGRO", "MAIOR", "MALTE", "MAMAR", "MANTO", "MARCA", "MATAR", "MEIGO",
            "MEIOS", "MELAO", "MESMO", "METRO", "MIMOS", "MOEDA", "MOITA", "MOLHO", "MORNO", "MORRO",
            "MOTIM", "MUITO", "MURAL", "NAIPE", "NASCI", "NATAL", "NAVAL", "NINAR", "NIVEL", "NOBRE",
            "NOITE", "NORTE", "NUVEM", "OESTE", "OMBRO", "ORDEM", "ORGAO", "OSSEO", "OSSOS", "OUTRO",
            "OUVIR", "PALMA", "PARDO", "PASSE", "PATIO", "PEITO", "PELOS", "PERDO", "PERIL", "PERTO",
            "PEZAR", "PIANO", "PICAR", "PILAR", "PINGO", "PIONE", "PISTA", "PODER", "POREM", "PRADO",
            "PRATO", "PRAZO", "PRECO", "PRIMA", "PRIMO", "PULAR", "QUERO", "QUOTA", "RAIVA", "RAMPA",
            "RANGO", "REAIS", "REINO", "REZAR", "RISCO", "ROCAR", "ROSTO", "ROUBO", "RUSSO", "SABER",
            "SACAR", "SALTO", "SAMBA", "SANTO", "SELAR", "SELOS", "SENSO", "SERAO", "SERRA", "SERVO",
            "SEXTA", "SINAL", "SOBRA", "SOBRE", "SOCIO", "SORTE", "SUBIR", "SUJEI", "SUJOS", "TALAO",
            "TALHA", "TANGA", "TARDE", "TEMPO", "TENHO", "TERCO", "TERRA", "TESAO", "TOCAR", "LACRE",
            "LAICO", "LAMBA", "LAMBO", "LARGO", "LARVA", "LASCA", "LASER", "LAURA", "LAVRA", "LEIGO",
            "LEITE", "LEITO", "LEIVA", "LENHO", "LENTO", "LEQUE", "LERDO", "LESAO", "LESMA", "LEVAR",
            "LIBRA", "LIMBO", "LINDO", "LINEO", "LIRIO", "LISAR", "LISTA", "LIVRO", "LOGAR", "LOMBO",
            "LOTES", "LOUCA", "LOUCO", "LOURO", "LUGAR", "LUZES", "MACIO", "MACOM", "MAIOR", "MALHA",
            "MALTE", "MAMAR", "MAMAE", "MANTO", "MARCO", "MARIA", "MARRA", "MARTA", "MATAR", "MEDIR",
            "MEIGO", "MEIOS", "MELAO", "MENTA", "MENTI", "MESMO", "METRO", "MIADO", "MIDIA", "MIELO",
            "MIELO", "MILHO", "MIMOS", "MINAR", "MINHA", "MIOLO", "MIRAR", "MISSA", "MITOS", "MOEDA",
            "MOIDO", "MOITA", "MOLDE", "MOLHO", "MONAR", "MONJA", "MORAL", "MORAR", "MORDA", "MORFO",
            "MORTE", "MOSCA", "MOSCO", "MOTIM", "MOTOR", "MUDAR", "MUITO", "MULAR", "MULAS", "MUMIA",
            "MURAL", "EXTRA", "FALAR", "FALTA", "FARDO", "FAROL", "FARTO", "FATAL", "FEIXE", "FESTA",
            "FEUDO", "FEZES", "FIAPO", "FIBRA", "FICHA", "FIDEL", "FILAO", "FILHO", "FIRMA", "FISCO",
            "FISGA", "FLUIR", "FORCA", "FORMA", "FORTE", "FRACO", "FRADE", "FRISO", "FRITO", "FUGAZ",
            "FUGIR", "FUNDO", "FUROR", "FURTO", "FUZIL", "GABAR", "GAITA", "GALHO", "GANHO", "GAROA",
            "GARRA", "GARRO", "GARVO", "GASTO", "GAUPE", "GAZUA", "GEADA", "GEMER", "GERME", "GIGAS",
            "GIRAR", "GIZAR", "GLOBO", "GOSTO", "GRAOS", "GRACA", "GRAVA", "GRITO", "GRUDE", "HAVER",
            "HAVER", "HIATO", "HIDRA", "HIFEN", "HIMEL", "HORAS", "HOTEL", "HUMOR", "IDEAL", "IDOLO",
            "IGUAL", "ILESO", "IMUNE", "IRADO", "ISOLA", "JARRA", "JAULA", "JEGUE", "JEITO", "JOGAR",
            "JOVEM", "JUIZA", "JUIZO", "JULHO", "JUNHO", "JURAR", "JUSTA", "RAIOS", "ROSAS", "BATOM" ];

            const randomIndex = Math.floor(Math.random() * secretWords.length);
            return secretWords[randomIndex];  
    }
}