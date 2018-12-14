namespace AngularCrud.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class alter_table_employee_add_gender : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employees", "Gender", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Employees", "Gender");
        }
    }
}
