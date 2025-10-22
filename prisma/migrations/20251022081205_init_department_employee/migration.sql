BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Departments] (
    [ID] NVARCHAR(50) NOT NULL,
    [DepartmentName] NVARCHAR(50) NOT NULL,
    [Location] NVARCHAR(100),
    CONSTRAINT [Departments_pkey] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Employees] (
    [ID] NVARCHAR(1000) NOT NULL,
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [Email] NVARCHAR(100) NOT NULL,
    [Salary] FLOAT NOT NULL,
    [DepartmentID] NVARCHAR(50) NOT NULL,
    CONSTRAINT [Employees_pkey] PRIMARY KEY CLUSTERED ([ID]),
    CONSTRAINT [Employees_Email_key] UNIQUE NONCLUSTERED ([Email])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [IX_Employee_DepartmentID] ON [dbo].[Employees]([DepartmentID]);

-- AddForeignKey
ALTER TABLE [dbo].[Employees] ADD CONSTRAINT [Employees_DepartmentID_fkey] FOREIGN KEY ([DepartmentID]) REFERENCES [dbo].[Departments]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
