namespace AngularCrud.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class alter_table_employee_selectedskills : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employees", "SelectedSkills", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Employees", "SelectedSkills");
        }
    }
}
