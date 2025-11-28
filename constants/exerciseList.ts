export const exercisesByGroup: any = {
  peito: [
    {
      id: "supino_reto",
      nome: "Supino Reto",
      image: require("../app/assets/exercicios/roscadireta.png"),
      series: "4 séries",
      repeticoes: "8 a 12 repetições",
      descricao: "Exercício principal para peitoral. Mantenha os pés firmes no chão."
    },
    {
      id: "supino_inclinado",
      nome: "Supino Inclinado",
      image: require("../app/assets/peito.png"),
      series: "4 séries",
      repeticoes: "10 repetições",
      descricao: "Trabalha a parte superior do peitoral."
    },
    {
      id: "voador",
      nome: "Voador",
      image: require("../app/assets/peito.png"),
      series: "3 séries",
      repeticoes: "12 repetições",
      descricao: "Isolamento do peitoral com movimento de abertura."
    },
  ],

  costas: [
    {
      id: "puxada_frontal",
      nome: "Puxada Frontal",
      image: require("../app/assets/exercicios/Serrote.png"),
      series: "4 séries",
      repeticoes: "10 repetições",
      descricao: "Exercício base para dorsais na polia."
    },
    {
      id: "remada_baixa",
      nome: "Remada Baixa",
      image: require("../app/assets/exercicios/remadabaixa.png"),
      series: "4 séries",
      repeticoes: "10 a 12 repetições",
      descricao: "Movimento para trabalhar espessura das costas."
    },
    {
      id: "remada_curvada",
      nome: "Remada Curvada",
      image: require("../app/assets/exercicios/remadacurvada.png"),
      series: "4 séries",
      repeticoes: "8 a 12 repetições",
      descricao: "Exercício avançado para força e densidade dorsal."
    },
  ],

  pernas: [
    {
      id: "agachamento",
      nome: "Agachamento Livre",
      image: require("../app/assets/perna.png"),
      series: "4 séries",
      repeticoes: "8 a 12 repetições",
      descricao: "Exercício completo para quadríceps, glúteos e lombar."
    },
    {
      id: "leg_press",
      nome: "Leg Press",
      image: require("../app/assets/perna.png"),
      series: "4 séries",
      repeticoes: "12 repetições",
      descricao: "Excelente para quadríceps e posterior."
    },
    {
      id: "mesa_flexora",
      nome: "Mesa Flexora",
      image: require("../app/assets/perna.png"),
      series: "3 séries",
      repeticoes: "12 a 15 repetições",
      descricao: "Isola o posterior da coxa."
    },
  ],

  bracos: [
    {
      id: "rosca_direta",
      nome: "Rosca Direta",
      image: require("../app/assets/exercicios/roscadireta.png"),
      series: "3 séries",
      repeticoes: "10 a 12 repetições",
      descricao: "Exercício clássico focado no bíceps."
    },
    {
      id: "triceps_corda",
      nome: "Tríceps na Corda",
      image: require("../app/assets/exercicios/tricipscorda.png"),
      series: "3 séries",
      repeticoes: "12 a 15 repetições",
      descricao: "Movimento isolado para tríceps usando a corda."
    },
  ]
};
