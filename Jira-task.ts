import { Ticket } from "./Movidesk-ticket";

import axios from 'axios';

export class _task_jira {
    id_project: number = 10001;
    subject_movidesk: string = "";
    numero_mov_ticket: number = 0
    link_drive: string = "";
    mod_utilização: string = "";
    CPF_CNPJ: string = "";
    IE: string = "";
    razao_soc: string = "";
    desc_Produto: string = "";
    valor_total: string = "";
    quantidade: string = "";
    valor_frete: string = "";
    tipo_frete: string = "";
    roteador: string = "";
    rua: string = "";
    numero_endereço: string = "";
    estado: string = "";
    pais: string = "";
    bairoo: string = "";
    complemento: string = "";
    cidade: string = "";
    valor_unitário: string = "";
    celular: string = "";
    telefone: string = "";
    CEP: string = "";
    celular_financeiro: string = ""; 
    detalhe_mov: string = "";

    constructor(subject_movidesk: string,  numero_mov_ticket: number, link_drive: string, mod_utilização: string, CPF_CNPJ: string, IE: string, razao_soc: string, desc_Produto: string, valor_total: string, quantidade: string, valor_frete: string, tipo_frete: string, roteador: string, rua: string, numero_endereço: string, estado: string, pais: string, bairoo: string, complemento: string, cidade: string, valor_unitário: string, celular: string, telefone: string, CEP: string, celular_financeiro: string, detalhe_mov: string) {
        this.subject_movidesk = subject_movidesk;
        this.numero_mov_ticket = numero_mov_ticket;
        this.link_drive = link_drive;
        this.mod_utilização = mod_utilização;
        this.CPF_CNPJ = CPF_CNPJ;
        this.IE = IE;
        this.razao_soc = razao_soc;
        this.desc_Produto = desc_Produto;
        this.valor_total = valor_total;
        this.quantidade = quantidade;
        this.valor_frete = valor_frete;
        this.tipo_frete = tipo_frete;
        this.roteador = roteador;
        this.rua = rua;
        this.numero_endereço = numero_endereço;
        this.estado = estado;
        this.pais = pais;
        this.bairoo = bairoo;
        this.complemento = complemento;
        this.cidade = cidade;
        this.valor_unitário = valor_unitário;
        this.celular = celular;
        this.telefone = telefone;
        this.CEP = CEP;
        this.celular_financeiro = celular_financeiro; 
        this.detalhe_mov = detalhe_mov;
    }



}

export function CriarJson(task:_task_jira): any {
    return{
        "fields": {
    "project": {
                        "id": task.id_project
                    },
                    "summary": task.subject_movidesk,
            "description": {
                "version": 1,
                "type": "doc",
                "content": [
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": `Numero do Ticket Moviedesk: ${task.numero_mov_ticket}` 
                            }
                        ]
                    },
    
                    {
                        "type": "panel",
                        "attrs": {
                            "panelType": "info"
                        },
                        "content": [
                            {
                                "type": "heading",
                                "attrs": {
                                    "level": 3
                                },
                                "content": [
                                    {
                                        "type": "text",
                                        "text": "Link de envio (com nota e correios)"
                                    }
                                ]
                            }
                        ]
                    },
    
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": task.link_drive
                            }
                        ]
                    },
    
                    {
                        "type": "rule"
                    },
    
                    {
                        "type": "panel",
                        "attrs": {
                            "panelType": "note"
                        },
                        "content": [
                            {
                                "type": "heading",
                                "attrs": {
                                    "level": 3
                                },
                                "content": [
                                    {
                                        "type": "text",
                                        "text": "TICKET",
                                        "marks": [
                                            {
                                                "type": "strong"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
    
                    {
                        "type": "paragraph",
                        "content": [
                            {
                                "type": "text",
                                "text": `Mod.de Utilização: ${task.mod_utilização}`   
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `CNPJ/CPF: ${task.CPF_CNPJ}`
                            },
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `IE: 600.082.243.112 ${task.IE}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Razão Social: ${task.razao_soc}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Descrição do Produto: ${task.desc_Produto}` 
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Valor total Pedido + Frete: ${task.valor_total}` 
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Quantidade: ${task.quantidade}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text":  `Valor do Frete: 27,70 ${task.valor_frete} `
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Tipo do frete: SEDEX ${task.tipo_frete}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Roteador: MikroTik RB750gr3 ${task.roteador}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Rua: Rua Barão do Rio Branco ${task.rua}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Número: ${task.numero_endereço}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Estado: ${task.estado}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": ` Páis: ${task.pais} `
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Bairro: ${task.bairoo}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `complemento: ${task.complemento}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Cidade: ${task.cidade}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `valor Unitário do Produto: ${task.valor_unitário}`
                            }
                            ,
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Celular: ${task.celular}`
                            },
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Telefone: ${task.telefone}`
                            },

                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `CEP: ${task.CEP}`
                            },
                            {
                                "type": "hardBreak"
                            },
                            {
                                "type": "text",
                                "text": `Celular financeiro : ${task.celular_financeiro}`
                            }
                        ]
                    },
    
    
    
    
                    {
                        "type": "rule"
                    },
    
    
    
                    {
                        "type": "panel",
                        "attrs": {
                            "panelType": "warning"
                        },
    
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "type": "text",
                                        "text": "Informações Importantes",
                                        "marks": [
                                            {
                                                "type": "strong"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },{
                        "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": task.detalhe_mov
                        }
                    ]
                },

                {
                    "type": "rule"
                },

                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Qualquer dúvida estmos a disposição. Equipe Wifire!"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Contato: arthur.spier@wifire.me"
                        }
                    ]
                }
            ]
        }
        ,
                "issuetype": {
                    "id": "10007"
                },
                "assignee": {
                    "name": "arthur.spier18@gmail.com"
                },
                "priority": {
                    "name": "Medium"
                }
    }
}


}


export const customFieldsMap = {
    6692: 'mod_utilizacao',
    6693: 'CPF_CNPJ',
    6694: 'IE',
    6695: 'razao_soc',
    6697: 'desc_Produto',
    6699: 'valor_total',
    6700: 'quantidade',
    6702: 'valor_frete',
    6704: 'tipo_frete',
    6727: 'roteador',
    6737: 'rua',
    6738: 'numero_endereco',
    6741: 'estado',
    6742: 'pais',
    6794: 'bairro',
    6795: 'complemento',
    6810: 'cidade',
    6901: 'valor_unitario',
    6902: 'celular',
    6903: 'telefone',
    6904: 'CEP',
    36999: 'celular_financeiro'
};

export const customField = {
    mod_utilizacao: '',
    CPF_CNPJ: '',
    IE: '',
    razao_soc: '',
    desc_Produto: '',
    valor_total: '',
    quantidade: '',
    valor_frete: '',
    tipo_frete: '',
    roteador: '',
    rua: '',
    numero_endereco: '',
    estado: '',
    pais: '',
    bairro: '',
    complemento: '',
    cidade: '',
    valor_unitario: '',
    celular: '',
    telefone: '',
    CEP: '',
    celular_financeiro: '',
    detalhe_mov: ''
};