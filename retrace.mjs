
export class TechStack{
    constructor(
        tech /* technology in which developer is working on */,
        exp /* total years of experiene that developer invested to learn it */
    ) {
        this.tech = tech;
        this.exp = exp;
    }

    //!@to-do: create a logic for getting status as beginner, medium, expert
}

export class SocialLink {
    constructor(name, link) {
        this.name = name
        this.link = link
    }
}

export class PhoneNumber{
    constructor(country, phone) {
        this.country = country
        this.phone = phone
    }
}

export class Address{
    constructor(
        address,
        city,
        country,
        pin
    ) {
        this.address = address
        this.city = city
        this.country = country
        this.pin = pin
    }
}


export class Experience {
    constructor({
        company_name,
        position,
        location,
        short_description,
        started_at,
        ended_at = null,
        is_current = false,
        is_full_time = true,
    }) {
        this.company_name = company_name;
        this.position = position;
        this.started_at = started_at;
        this.ended_at = ended_at;
        this.location = location;
        this.short_description = short_description;
        this.is_current = is_current;
        this.is_full_time = is_full_time;
    }
    //!@to-do: get diff from start_date to end date
}

export class Person {
    constructor({
        name,
        short_description,
        phoneNumber,
        address,
        social,
        experience,
    }) {
        this.name = name;
        this.short_description = short_description;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.social = social;
        this.experience = experience;
    }
}


export class ProductsWorkedOn{
    constructor({
        name,
        url,
        isInproduction,
    }) {
        this.name = name;
        this.url = url;
        this.isInproduction = isInproduction;
    }
}


export class Developer {
    constructor() {
        this.person = new Person({
            name: "Dharmendra Soni",
            short_description: `
            Designed and developed scalable backend architecture for robust data processing system
            with REST and graphql standards. If you are looking for the one to design your backend
            with millions of user handling capabilities. I can develop this for you with Test driven
            development.
        `,

            phoneNumber: new PhoneNumber("+91", "7597365803"),
            address: new Address("new town hall", "munich", "germany", 80331),
            social: [
                new SocialLink("github", "https://github.com/dharmendrasha"),
                new SocialLink(
                    "linkedin",
                    "https://www.linkedin.com/in/dharmendrashah/"
                ),
            ],
            experience: [
                new Experience({
                    company_name: "ScaleTech Solutions",
                    started_at: new Date("01 mar 2021"),
                    position: "Sr. Software Engineer",
                    location: new Address(
                        "sola road",
                        "ahamdabad",
                        "india",
                        380061
                    ),
                    short_description: `Used nodejs as a main tech stack, learning and growing as usual creating scalable backend systems.`,
                    ended_at: null,
                    is_full_time: true,
                    is_current: true,
                }),
                new Experience({
                    company_name: "Sr Software Engineer",
                    started_at: new Date("01 oct 2019"),
                    position: "Dotsquares Pvt Ltd",
                    location: new Address(
                        "jhalana dungri",
                        "jaipur",
                        "india",
                        302004
                    ),
                    short_description: `Used PHP and Node.js technology to develop E2E. Frameworks like Laravel, Lumen, Nest, express.js, CodeIgniter, CakePHP and many other technologies. Used Many SQL databases to Store data into the database using databases like MySQL, Postgres, and SQLite databases Like MongoDB, and DynamoDB. Mainly Used Microservices architectures to develop Projects.`,
                    ended_at: new Date("01 mar 2021"),
                    is_full_time: true,
                    is_current: false,
                }),
                new Experience({
                    company_name: "Software Developer",
                    started_at: new Date("01 may 2017"),
                    position: "Ranosys Pvt Ltd",
                    location: new Address(
                        "Sitapura",
                        "jaipur",
                        "india",
                        302022
                    ),
                    short_description: `My job was to complete the project in the given timeline, fix the bugs Share the updated work to the client and take feedback from them.`,
                    ended_at: new Date("01 aug 2019"),
                    is_full_time: true,
                    is_current: false,
                }),
                new Experience({
                    company_name: "Software Trainee",
                    started_at: new Date("01 feb 2015"),
                    position: "Ranosys Pvt Ltd",
                    location: new Address(
                        "Sitapura",
                        "jaipur",
                        "india",
                        302022
                    ),
                    short_description: `My job was to complete the project in the given timeline, fix the bugs Share the updated work to the client and take feedback from them.`,
                    ended_at: new Date("01 apr 2016"),
                    is_full_time: true,
                    is_current: false,
                }),
            ],
        });
        this.yearsOfExperience = 8.6

        this.doesWorkedWithMocroservice = true

        this.workedWithCloudFunctions = true

        this.experienceInCloudFunctions = 3

        this.goodWithFrontend = true

        this.levelOfExperienceInSql = 'good'

        this.products = [
            new ProductsWorkedOn({
                name: "vime",
                url: "https://vime.ai",
                isInproduction: true,
            }),
            new ProductsWorkedOn({
                name: "flextnow",
                url: "https://flextnow.com",
                isInproduction: true,
            }),
            new ProductsWorkedOn({
                name: "needlework",
                url: "https://www.needleworktours.com.au/",
                isInproduction: true,
            }),
        ];

        this.techStackWithExperince = [
            new TechStack("nodejs", 6),
            new TechStack("nestjs", 4),
            new TechStack("typescript", 5.5),
            new TechStack("monorepo", 3),
            new TechStack("microservice", 6),
            new TechStack("react.js", 3),
            new TechStack("next.js", 2),
            new TechStack("pgsql", 5),
            new TechStack("mysql", 7),
            new TechStack("mongodb", 4),
            new TechStack("docker", 2),
            new TechStack("aws", 6),
            new TechStack("gcp", 6),
            new TechStack("cloudfunctions", 4),
            new TechStack("firebase", 5),
            new TechStack("jest", 5),
            new TechStack("git", 7),
            new TechStack("kafka", 2),
            new TechStack("nats", 1),
            new TechStack("RabbitMQ", 3),
        ];

    }

}


export class GoodFitForRetraced{
    constructor(developer) {

        this.developer = developer;

        this.haveEqOrMoreThanSixYearsOfExperience = false

        this.haveMicroserviceExperince = false;

        this.haveWorkedWithCloudFunctions = false;

        this.haveExperienceWithFrontend = false;

        this.skillSet = { required: [], adequate: [] };

        this.jobProfileLink = new URL(
            "https://boards.eu.greenhouse.io/retraced/jobs/4024798101?gh_src=3098f382teu"
        );
    }

    undestand() {
        this.haveEqOrMoreThanSixYearsOfExperience =
            this.developer.yearsOfExperience >= 6;

        this.haveMicroserviceExperince =
            this.developer.doesWorkedWithMocroservice ?? false;

        this.haveWorkedWithCloudFunctions =
            this.developer.workedWithCloudFunctions ?? false;

        this.haveExperienceWithFrontend =
            this.developer.goodWithFrontend ?? false;

        const haveProductsInProductions = this.developer.products.some(
            (v) => v.isInproduction
        );

        this.skillSet = {
            required: [
                this.haveEqOrMoreThanSixYearsOfExperience,
                this.haveMicroserviceExperince ||
                    this.haveWorkedWithCloudFunctions,
                this.haveExperienceWithFrontend,
            ].every((v) => v === true),
            adequate: [
                this.developer.levelOfExperienceInSql === "good",
                haveProductsInProductions,
            ].some((v) => v === true),
        };

        return {
            haveEqOrMoreThanSixYearsOfExperience: this.haveEqOrMoreThanSixYearsOfExperience,
            haveMicroserviceExperince: this.haveMicroserviceExperince,
            haveWorkedWithCloudFunctions: this.haveWorkedWithCloudFunctions,
            skillSet: this.skillSet
        };
    }
}

console.log(new GoodFitForRetraced(new Developer()).undestand());
