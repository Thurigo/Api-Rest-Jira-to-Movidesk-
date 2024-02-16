
export class Ticket {
    type: number = 1;
    subject: string = '';
    category: string = "Setup Inicial";

    owner: {
        id: string;
        email: string;
    };

    ownerTeam: string = '';

    createdBy: {
        id: string;
        email: string;
    };

    serviceFull: string[] = [
        "Comercial",
        "Envio do Equipamento"
    ];
    serviceFirstLevelId: number = 63479;
    serviceFirstLevel: string = "Envio do Equipamento";
    serviceSecondLevel: string = "Comercial";
    serviceThirdLevel: string | null = null;
    contactForm: string | null = null;

    tags: string[] = [
        "envio",
        "Envio"
    ];

    clients: {
        id: string;
        personType: number;
        profileType: number;
        businessName: string;
    }[];

    actions: {
        type: number;
        description: string;
        createdBy: {
            id: string;
            email: string;
        };
    }[];

    customFieldValues: {
        customFieldId: number;
        customFieldRuleId: number;
        line: number;
        value: string | number | null;
        items: {
            personId: string | null;
            clientId: string | null;
            team: string | null;
            customFieldItem: string;
            storageFileGuid: string;
            fileName: string | null;
        }[];
    }[];

    webhookEvents: any;

    constructor(
        subject: string,
        owner: { id: string; email: string },
        ownerTeam: string,
        createdBy: { id: string; email: string },
        clients: {
            id: string;
            personType: number;
            profileType: number;
            businessName: string;
        }[],
        actions: {
            type: number;
            description: string;
            createdBy: { id: string; email: string };
        }[],
        customFieldValues: {
            customFieldId: number;
            customFieldRuleId: number;
            line: number;
            value: string | number | null;
            items: {
                personId: string | null;
                clientId: string | null;
                team: string | null;
                customFieldItem: string;
                storageFileGuid: string;
                fileName: string | null;
            }[];
        }[],
        webhookEvents: any
    ) {
        this.subject = subject;
        this.owner = owner;
        this.ownerTeam = ownerTeam;
        this.createdBy = createdBy;
        this.clients = clients;
        this.actions = actions;
        this.customFieldValues = customFieldValues;
        this.webhookEvents = webhookEvents;
    }
}



exports.Ticket = Ticket;