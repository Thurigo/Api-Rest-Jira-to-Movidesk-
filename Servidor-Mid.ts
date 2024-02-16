
import express, { response } from 'express';
import { Ticket } from "./Movidesk-ticket";
import axios from 'axios';
import cors from 'cors';
import { CriarJson, _task_jira, customFieldsMap, customField} from './Jira-task';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const api = axios;
const port = 443
let url: string | undefined = process.env.Url_movidesk_token;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var url2: string | undefined = process.env.Url_jira;

const username = process.env.Jira_username;
const password = process.env.Jira_password;

const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    "Authorization": `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
};

app.post('/criarticket', async (req: express.Request, res: express.Response) => {
    console.log
    try {

        const newTicket2 = req.body;

        if (!newTicket2 || typeof newTicket2 !== 'object') {
            return res.status(400).json({ error: 'Dados da requisição ausentes ou inválidos.' });
        }
        const newTicket = new Ticket(

            newTicket2.subject,
            newTicket2.owner,
            newTicket2.ownerTeam,
            newTicket2.createdBy,
            newTicket2.clients,
            newTicket2.actions,
            newTicket2.customFieldValues,
            newTicket2.webhookEvents,

        );

if (!url) {
    console.error('A variável de ambiente Url_movidesk_token não está definida.');
    return res.status(500).json({ error: 'Erro interno do servidor' });
}
        const response = await axios.post(url, newTicket);
        console.log(response.data);
        if ('status' in response && 'data' in response) {
            res.status(response.status || 500).json(response.data);
        } else {
            console.error('A propriedade status ou data não está presente no objeto de resposta.');
            res.status(500).json({ error: 'erro' });
        }
    } catch (error: any) {
        if (error.response) {
            console.error('Erro na resposta do servidor:', error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            console.error('Sem resposta do servidor:', error.request);
            res.status(500).json({ error: 'erro' });
        } else {
            console.error('Erro durante a configuração da requisição:', error.message);
            res.status(500).json({ error: 'erro' });
        }
    }
})


app.post('/criarTask', async (req: express.Request, res: express.Response) => {
    try {
        const ticket_movi =  req.body
        console.log(ticket_movi)
        if (!ticket_movi || typeof ticket_movi !== 'object') {
            return res.status(400).json({ error: 'Dados da requisição ausentes ou inválidos.' });
        }
        console.log('Requisição para criar uma tarefa recebida.');
        
        interface CustomFieldsMap {
            [key: number]: string;
        }
        let arrayCustom: string[] = [];
        
        interface CustomFields {
            [key: string]: string;
        }
        const customFieldsMa2: CustomFieldsMap = customFieldsMap;
        const customFields: CustomFields = customField;
        if (ticket_movi && ticket_movi.CustomFieldValues) {
         
            ticket_movi.CustomFieldValues.forEach((customField: any) => {
             
                const customFieldName = customFieldsMa2[customField.customFieldId];
                if (customFieldName) {
                    customFields[customFieldName] = customField.value;
                }
                if (customField && customField.CustomFieldId) {
             
                    console.log('CustomFieldId:', customField.CustomFieldId);
                    console.log('CustomFieldRuleId:', customField.CustomFieldRuleId);
                    console.log('Line:', customField.Line);
                    console.log('Value:', customField.Value);
                    if (customField.Value=== null){

                    }else{ 
                    arrayCustom.push(customField.Value)
                }
                    if (customField.Items && customField.Items.length > 0) {
                        customField.Items.forEach((item: any) => {
                            console.log('Item:', item);
                         
                        });
                    }
                }
                
            });
        } else {
            console.log('Erro: Não foi possível acessar CustomFieldValues no objeto recebido.');
        }


        const Jira_task = new _task_jira(
            ticket_movi.Subject,
            ticket_movi.Id,
            ticket_movi.Subject,
            ticket_movi.Subject,
            arrayCustom[1],
            arrayCustom[2],
            arrayCustom[3],
            arrayCustom[4],
            arrayCustom[5],
            arrayCustom[6],
            arrayCustom[7],
            ticket_movi.Subject,
            arrayCustom[9],
            arrayCustom[10],
            arrayCustom[11],
            arrayCustom[12],
            arrayCustom[13],
            arrayCustom[14],
            arrayCustom[15],
            arrayCustom[16],
            arrayCustom[17],
            arrayCustom[18],
            arrayCustom[19],
            arrayCustom[20],
            arrayCustom[21],
            ticket_movi.Subject,
        );


        console.log('___________________________________')
        console.log(customFields)
        console.log('1___________________________________1')
        console.log(Jira_task)
        console.log('___________________________________')



        console.log('Requisição para criar uma tarefa recebida.4');
        const payload = CriarJson(Jira_task)


        if (!url2) {
            console.error('A variável de ambiente Url_movidesk_token não está definida.');
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }

        const response = await axios.post(url2, payload, { headers });
        if (response.status === 201) {
            console.log("Tarefa criada com sucesso!");
            console.log(response.data)
            res.status(201).send(response.data);
        } else {
            console.log("Erro ao criar tarefa:", response.statusText);
            console.log(response.data);
            res.status(response.status).send(`Erro ao criar tarefa: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        res.status(500).send("Erro interno do servidor");
    }
});






app.post('/', async (req, res) => {
    try {
        const requestData = req.body;
        console.log('Dados da requisição:', requestData);

        res.status(201).send({ message: 'Requisição recebida com sucesso!' });
    } catch (error) {
        console.error('Erro na hora da requisição:', error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

app.listen(port, () => {
    console.log('Servidor aberto')
})