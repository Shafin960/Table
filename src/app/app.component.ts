import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'table';
  dataSource = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      dob: "1990-05-15",
      address: "123 Main St, New York, NY",
      maritalStatus: "Single",
      designation: "Software Engineer"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "+1 234-567-8901",
      dob: "1988-08-22",
      address: "456 Elm St, San Francisco, CA",
      maritalStatus: "Married",
      designation: "Project Manager"
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      phone: "+1 345-678-9012",
      dob: "1992-11-10",
      address: "789 Pine St, Los Angeles, CA",
      maritalStatus: "Single",
      designation: "UX Designer"
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      phone: "+1 456-789-0123",
      dob: "1985-03-25",
      address: "321 Oak St, Chicago, IL",
      maritalStatus: "Married",
      designation: "Data Scientist"
    },
    {
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      phone: "+1 567-890-1234",
      dob: "1991-07-30",
      address: "654 Maple St, Miami, FL",
      maritalStatus: "Single",
      designation: "DevOps Engineer"
    },
    {
      firstName: "Sarah",
      lastName: "Miller",
      email: "sarah.miller@example.com",
      phone: "+1 678-901-2345",
      dob: "1987-09-18",
      address: "987 Cedar St, Seattle, WA",
      maritalStatus: "Married",
      designation: "QA Engineer"
    },
    {
      firstName: "Robert",
      lastName: "Moore",
      email: "robert.moore@example.com",
      phone: "+1 789-012-3456",
      dob: "1989-12-05",
      address: "159 Birch St, Boston, MA",
      maritalStatus: "Single",
      designation: "Software Architect"
    },
    {
      firstName: "Olivia",
      lastName: "Taylor",
      email: "olivia.taylor@example.com",
      phone: "+1 890-123-4567",
      dob: "1993-02-28",
      address: "753 Spruce St, Austin, TX",
      maritalStatus: "Married",
      designation: "Business Analyst"
    },
    {
      firstName: "William",
      lastName: "Anderson",
      email: "william.anderson@example.com",
      phone: "+1 901-234-5678",
      dob: "1986-06-12",
      address: "852 Walnut St, Denver, CO",
      maritalStatus: "Single",
      designation: "Product Manager"
    },
    {
      firstName: "Sophia",
      lastName: "Martinez",
      email: "sophia.martinez@example.com",
      phone: "+1 012-345-6789",
      dob: "1994-10-03",
      address: "963 Chestnut St, Phoenix, AZ",
      maritalStatus: "Married",
      designation: "HR Specialist"
    },
    {
      firstName: "James",
      lastName: "Harris",
      email: "james.harris@example.com",
      phone: "+1 135-246-3579",
      dob: "1990-01-20",
      address: "147 Palm St, Dallas, TX",
      maritalStatus: "Single",
      designation: "Marketing Manager"
    },
    {
      firstName: "Charlotte",
      lastName: "Clark",
      email: "charlotte.clark@example.com",
      phone: "+1 246-357-4680",
      dob: "1989-04-14",
      address: "258 Redwood St, Orlando, FL",
      maritalStatus: "Married",
      designation: "Financial Analyst"
    },
    {
      firstName: "Benjamin",
      lastName: "Lewis",
      email: "benjamin.lewis@example.com",
      phone: "+1 357-468-5791",
      dob: "1985-07-07",
      address: "369 Willow St, San Diego, CA",
      maritalStatus: "Single",
      designation: "Full-Stack Developer"
    },
    {
      firstName: "Amelia",
      lastName: "Walker",
      email: "amelia.walker@example.com",
      phone: "+1 468-579-6802",
      dob: "1991-09-23",
      address: "753 Cypress St, Las Vegas, NV",
      maritalStatus: "Married",
      designation: "Cybersecurity Analyst"
    },
    {
      firstName: "Daniel",
      lastName: "Hall",
      email: "daniel.hall@example.com",
      phone: "+1 579-680-7913",
      dob: "1992-11-15",
      address: "852 Oakwood St, Houston, TX",
      maritalStatus: "Single",
      designation: "Cloud Engineer"
    },
    {
      firstName: "Isabella",
      lastName: "Allen",
      email: "isabella.allen@example.com",
      phone: "+1 680-791-8024",
      dob: "1988-02-08",
      address: "741 Magnolia St, Minneapolis, MN",
      maritalStatus: "Married",
      designation: "Technical Writer"
    },
    {
      firstName: "Ethan",
      lastName: "Young",
      email: "ethan.young@example.com",
      phone: "+1 791-802-9135",
      dob: "1993-05-27",
      address: "963 Evergreen St, Portland, OR",
      maritalStatus: "Single",
      designation: "AI Engineer"
    },
    {
      firstName: "Mia",
      lastName: "King",
      email: "mia.king@example.com",
      phone: "+1 802-913-0246",
      dob: "1995-12-19",
      address: "159 Laurel St, Charlotte, NC",
      maritalStatus: "Married",
      designation: "Scrum Master"
    },
    {
      firstName: "Alexander",
      lastName: "Wright",
      email: "alexander.wright@example.com",
      phone: "+1 913-024-1357",
      dob: "1990-08-31",
      address: "258 Fir St, Atlanta, GA",
      maritalStatus: "Single",
      designation: "Embedded Systems Engineer"
    },
    {
      firstName: "Ella",
      lastName: "Scott",
      email: "ella.scott@example.com",
      phone: "+1 024-135-2468",
      dob: "1987-06-09",
      address: "369 Hickory St, Nashville, TN",
      maritalStatus: "Married",
      designation: "Database Administrator"
    }
  ];
  
}
