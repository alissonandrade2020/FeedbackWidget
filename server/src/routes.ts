import express from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

// GET, POST, PUT, PATCH, DELETE, etc

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informaçoes de uma entidade
// PATCH = Atualizar informação única de uma entidade

routes.get("/", (req: any, res: any) => {
  return res.send([
    " ------------- < NLWReturn > --------------",
    " |                                         |",
    " |                Backend                  |",
    " |                                         |",
    " -------------- < Node.js > ---------------",
    " |                                         |",
    " |                  API                    |",
    " |                                         |",
    " ------------- < NLWReturn > --------------",
    " |                                         |",
    "         Alisson de Andrade Araújo         ",
    "Formação: Análise e Desenvolvimento de Sistemas",
    "Descrição: Desenvolvedor Back-end, Front-end e Mobile",
    "Site: http://alissondeandradearaujo.000webhostapp.com/",
    "CV: https://alissonandradesistema.000webhostapp.com/curriculo/",
    "Currículo Lattes: http://lattes.cnpq.br/7594653859194302/",
    "Github: https://github.com/alissonandrade2020",
    "Rocketseat: https://app.rocketseat.com.br/me/alissondeandradearaujo",
    "Linkedin: https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/",
  ]);
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter,
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (err) {
    console.log(err);

    return res.status(500).send();
  }
});
